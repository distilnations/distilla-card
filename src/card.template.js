/*
 * Distilla Card — карточка Home Assistant для Telegram-термометра Distilla 1.
 * Картинка аппарата и анимации взяты из веб-интерфейса прошивки 1.20.
 * Данные — из датчиков пакета distilla.yaml (интеграция RESTful).
 * https://distilla.site
 */
const DISTILLA_CARD_VERSION = "__VERSION__";
const APPARATUS_SVG = __SVG__;

const DEFAULT_ENTITIES = {
  run: "binary_sensor.distilla_peregonka_idet",
  cube: "sensor.distilla_kub",
  tsarga: "sensor.distilla_tsarga",
  otbor: "sensor.distilla_otbor",
  atm: "sensor.distilla_atmosfera_tsa",
  win: "sensor.distilla_voda_vkhod",
  wout: "sensor.distilla_voda_vykhod",
  fix: "sensor.distilla_fiks_tsargi",
  dts: "sensor.distilla_delta_tsargi",
  dot: "sensor.distilla_delta_otbora",
  ts_state: "sensor.distilla_status_tsargi",
  ot_state: "sensor.distilla_status_otbora",
  flow: "sensor.distilla_raskhod_vody",
  water: "sensor.distilla_voda_za_peregon",
  pressure: "sensor.distilla_davlenie",
  battery: "sensor.distilla_batareia",
  box: "sensor.distilla_temperatura_v_korpuse",
  rssi: "sensor.distilla_wi_fi",
  mode: "sensor.distilla_rezhim",
  fw: "sensor.distilla_proshivka",
  delta_alarm: "binary_sensor.distilla_tsarga_ne_v_norme",
  atm_alarm: "binary_sensor.distilla_atmosfera_goriachaia",
  water_alarm: "binary_sensor.distilla_voda_propala",
  heater_cut: "binary_sensor.distilla_zashchita_srabotala",
  tg: "binary_sensor.distilla_telegram_na_sviazi",
};

const CSS = `
:host{
  --bg:#0E0F11; --s0:#101214; --s1:#14171A; --s2:#15181B; --panel:rgba(23,26,29,.84); --panel2:rgba(23,26,29,.9);
  --tx:#E9E6E0; --tx2:#C9C4BB; --tx3:#B4BCC3; --mut:#98A1A9; --bd:#2A3036; --bd2:#3A4148;
  --ok:#5BC28A; --warn:#E8B341; --alarm:#F05A4F; --acTx:#F2D2B6; --acTx2:#E2A06A; --water:#4FB3D9; --copper:#D4884A;
  --mono:"IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
  --sans:"IBM Plex Sans",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  display:block;
}
[hidden]{display:none!important}
ha-card{background:var(--panel);border:1px solid var(--bd);border-radius:14px;color:var(--tx);font-family:var(--sans);overflow:hidden;transition:border-color .4s, box-shadow .4s}
ha-card.alarm{border-color:var(--alarm);box-shadow:0 0 0 1px var(--alarm),0 0 28px rgba(240,90,79,.25);animation:alarmGlow 1.2s ease-in-out infinite alternate}
@keyframes alarmGlow{from{box-shadow:0 0 0 1px var(--alarm),0 0 10px rgba(240,90,79,.15)}to{box-shadow:0 0 0 1px var(--alarm),0 0 30px rgba(240,90,79,.45)}}
.wrap{padding:14px;display:flex;flex-direction:column;gap:12px}
.head{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.brand{display:flex;flex-direction:column;min-width:0}
.brand .eb{font-family:var(--mono);font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--acTx2)}
.brand .nm{font-size:18px;font-weight:700;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.brand .sub{font-size:12px;color:var(--mut)}
.pill{display:inline-flex;align-items:center;gap:7px;padding:5px 11px;border-radius:999px;font-size:12.5px;font-weight:600;border:1px solid var(--bd2);background:var(--s1);color:var(--tx2);white-space:nowrap}
.pill i{width:8px;height:8px;border-radius:50%;background:var(--mut)}
.pill.run{color:var(--ok);border-color:rgba(91,194,138,.45)} .pill.run i{background:var(--ok);box-shadow:0 0 8px var(--ok)}
.pill.alarm{color:#fff;background:rgba(240,90,79,.18);border-color:var(--alarm)} .pill.alarm i{background:var(--alarm);animation:blink .8s steps(2) infinite}
.pill.off i{background:var(--bd2)}
@keyframes blink{50%{opacity:.2}}
.ap{position:relative;width:100%;aspect-ratio:400/480;container-type:inline-size;max-width:520px;margin:0 auto}
.ap svg{position:absolute;inset:0;width:100%;height:100%;display:block}
.box{position:absolute;box-sizing:border-box;border:2px solid var(--bd2);border-radius:2.2cqw;background:var(--s1);padding:0 2.6cqw;display:flex;flex-direction:column;justify-content:center;overflow:hidden;cursor:pointer;transition:border-color .3s}
.box:hover{border-color:var(--acTx2)}
.box .l{font-size:3.3cqw;color:var(--tx3);line-height:1.2;white-space:nowrap}
.box .v{font-family:var(--mono);font-size:5.25cqw;font-weight:600;line-height:1.1;white-space:nowrap}
.box.big .v{font-size:6.25cqw}
.box.ok{border-color:var(--ok)} .box.warn{border-color:var(--warn)} .box.bad{border-color:var(--alarm);animation:boxBad 1s ease-in-out infinite alternate}
.box.water{border-color:var(--water)}
@keyframes boxBad{to{box-shadow:0 0 3cqw rgba(240,90,79,.55)}}
.lbl{position:absolute;font-size:3.25cqw;color:var(--mut);white-space:nowrap;line-height:1}
.lbl.acc{color:var(--acTx2);font-weight:600}
/* анимации аппарата (как в веб-интерфейсе) */
.flow{animation:flow .8s linear infinite}
.pulse{transform-box:fill-box;transform-origin:center;animation:pulse 1s ease-out infinite}
.nopulse{opacity:0}
.bub{transform-box:fill-box;animation:bub 2.4s ease-in infinite}.bub2{animation-delay:.8s}.bub3{animation-delay:1.6s}
.drip{transform-box:fill-box;animation:drip 1.4s ease-in infinite}
.fx{transition:opacity 1.2s}
.vap{transform-box:fill-box;animation:vap 1.8s linear infinite}
.shim{animation:shim 2.2s ease-in-out infinite alternate}
.heat{animation:heat 1.4s ease-in-out infinite alternate}
.pb{transform-box:fill-box;transform-origin:center;animation:pb .9s ease-out infinite}
.mb{transform-box:fill-box;transform-origin:center;animation:mb 1.1s ease-in infinite}.mb2{animation-delay:.35s;animation-duration:.9s}.mb3{animation-delay:.7s;animation-duration:1.3s}
.rf{transform-box:fill-box;animation:rf 1.5s ease-in infinite}.rf2{animation-delay:.5s}.rf3{animation-delay:1s}
.mfroth{animation:mf 1s ease-in-out infinite alternate}
@keyframes flow{100%{stroke-dashoffset:-16}}
@keyframes pulse{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(2.4)}}
@keyframes bub{0%{transform:translateY(0);opacity:0}20%{opacity:.8}100%{transform:translateY(-42px);opacity:0}}
@keyframes drip{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(24px);opacity:0}}
@keyframes vap{0%{transform:translateY(0);opacity:0}25%{opacity:.7}100%{transform:translateY(-24px);opacity:0}}
@keyframes shim{0%{opacity:.08}100%{opacity:.32}}
@keyframes heat{0%{opacity:.55}100%{opacity:1}}
@keyframes pb{0%{transform:translateY(0) scale(.5);opacity:0}30%{opacity:1}100%{transform:translateY(-9px) scale(1.15);opacity:0}}
@keyframes mb{0%{transform:translateY(0) scale(.6);opacity:0}25%{opacity:1}100%{transform:translateY(-20px) scale(1.2);opacity:0}}
@keyframes rf{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(32px);opacity:0}}
@keyframes mf{0%{transform:translateX(-5px)}100%{transform:translateX(5px)}}
/* остановлено: пар, капли и нагрев гаснут, вода стоит */
.ap.idle .fx, .ap.idle .heat{opacity:0!important}
.ap svg{transition:filter 1s}
.ap.idle svg{filter:saturate(.45) brightness(.8)}
.ap.idle *, .ap.dry .flow{animation-play-state:paused!important}
.ap.dry .flow{stroke-opacity:.35}
@media (prefers-reduced-motion:reduce){.ap *{animation:none!important}}
/* плитки */
.tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.tile{background:var(--s1);border:1px solid var(--bd);border-radius:12px;padding:10px 12px;display:flex;flex-direction:column;gap:2px;min-width:0;cursor:pointer;transition:border-color .3s}
.tile:hover{border-color:var(--bd2)}
.tile .t{display:flex;align-items:center;justify-content:space-between;gap:6px;font-size:13px;font-weight:600}
.tile .t span{display:inline-flex;align-items:center;gap:7px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tile .t span::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--c,var(--mut));flex:none}
.tag{font-style:normal;font-size:11px;font-weight:600;padding:2px 8px;border-radius:999px;background:rgba(91,194,138,.14);color:var(--ok);white-space:nowrap}
.tag.warn{background:rgba(232,179,65,.15);color:var(--warn)} .tag.bad{background:rgba(240,90,79,.18);color:var(--alarm)} .tag.mute{background:var(--s2);color:var(--mut)}
.tile .num{font-family:var(--mono);font-size:26px;font-weight:600;line-height:1.15}
.tile .num small{font-size:.5em;color:var(--mut);margin-left:3px;font-weight:500}
.tile .d{font-size:12px;color:var(--mut)}
.tile.bad{border-color:var(--alarm)} .tile.warn{border-color:rgba(232,179,65,.6)}
.water{grid-column:1/-1}
.wgrid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px 10px;margin-top:4px}
.wgrid .wl{font-size:11px;color:var(--mut);white-space:nowrap}
.wgrid .wv{font-family:var(--mono);font-size:17px;font-weight:600;white-space:nowrap}
.wgrid .wv small{font-size:.55em;color:var(--mut);margin-left:2px}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{font-family:var(--mono);font-size:11.5px;color:var(--tx2);background:var(--s1);border:1px solid var(--bd);border-radius:999px;padding:4px 10px;white-space:nowrap}
.chip.bad{color:var(--alarm);border-color:rgba(240,90,79,.5)}
.btns{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
button{font:600 14px var(--sans);border-radius:11px;padding:11px 8px;border:1px solid var(--bd2);background:var(--s1);color:var(--tx);cursor:pointer;transition:background .2s,border-color .2s}
button:hover{border-color:var(--acTx2)}
button:focus-visible,.box:focus-visible,.tile:focus-visible{outline:2px solid var(--acTx2);outline-offset:2px}
button.stop{color:var(--alarm);border-color:rgba(240,90,79,.55)}
button.stop.arm{background:var(--alarm);color:#fff;border-color:var(--alarm)}
button.done{border-color:var(--ok);color:var(--ok)}
.note{font-size:12px;color:var(--mut);text-align:center}
.miss{font-size:12.5px;color:var(--warn);background:rgba(232,179,65,.08);border:1px solid rgba(232,179,65,.3);border-radius:10px;padding:8px 10px}
`;

class DistillaCard extends HTMLElement {
  static getStubConfig() { return { title: "Distilla 1" }; }

  setConfig(config) {
    this._cfg = Object.assign({ title: "Distilla 1", show_buttons: true, show_tiles: true }, config || {});
    this._ent = Object.assign({}, DEFAULT_ENTITIES, (config && config.entities) || {});
    if (this._root) this._render(true);
  }

  getCardSize() { return 12; }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: "auto" }; }

  set hass(hass) {
    this._hass = hass;
    if (!this._root) this._build();
    this._render();
  }

  _build() {
    this._root = this.attachShadow({ mode: "open" });
    if (!document.getElementById("distilla-card-fonts")) {
      const l = document.createElement("link");
      l.id = "distilla-card-fonts"; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=IBM+Plex+Sans:wght@400;600;700&display=swap";
      document.head.appendChild(l);
    }
    const c = this._cfg;
    this._root.innerHTML = `<style>${CSS}</style>
<ha-card>
  <div class="wrap">
    <div class="head">
      <div class="brand"><span class="eb">Distillations</span><span class="nm" id="title"></span><span class="sub" id="sub"></span></div>
      <span class="pill off" id="state"><i></i><b>—</b></span>
    </div>
    <div class="miss" id="miss" hidden></div>
    <div class="ap idle" id="ap">
      ${APPARATUS_SVG}
      <div class="box water" data-k="wout" style="left:.5%;top:0;width:39%;height:9.17%"><span class="l">Вода · выход</span><span class="v">—</span></div>
      <div class="box" data-k="atm" style="left:59%;top:.42%;width:40.5%;height:9.17%"><span class="l">Атмосфера (ТСА)</span><span class="v">—</span></div>
      <div class="box" data-k="win" style="left:.5%;top:19.6%;width:39%;height:9.17%"><span class="l">Вода · вход</span><span class="v">—</span></div>
      <div class="box big" data-k="otbor" style="left:.5%;top:39.58%;width:38.5%;height:11.25%"><span class="l">Отбор</span><span class="v">—</span></div>
      <div class="box big" data-k="tsarga" style="left:58.5%;top:63.96%;width:40.5%;height:11.25%"><span class="l" id="tsName">Царга</span><span class="v">—</span></div>
      <div class="box big" data-k="cube" style="left:0;top:74.8%;width:29.5%;height:11.25%"><span class="l">Куб</span><span class="v">—</span></div>
      <span class="lbl" id="plates" style="left:56.5%;top:41.88%"></span>
      <span class="lbl" style="left:71%;top:54.5%;transform:translateX(-100%)">приёмник</span>
      <span class="lbl acc" id="cubeL" style="left:.5%;top:87.6%"></span>
      <span class="lbl" id="heatL" style="left:67%;top:95.83%">нагрев</span>
    </div>
    <div class="tiles" id="tiles">
      <div class="tile" data-k="cube" style="--c:var(--copper)"><div class="t"><span>Куб</span><em class="tag mute" id="cubeTag">—</em></div><div class="num" id="cubeN">—</div><div class="d" id="cubeD">&nbsp;</div></div>
      <div class="tile" data-k="tsarga" style="--c:var(--water)"><div class="t"><span>Царга</span><em class="tag mute" id="tsTag">—</em></div><div class="num" id="tsN">—</div><div class="d" id="tsD">&nbsp;</div></div>
      <div class="tile" data-k="otbor" style="--c:var(--ok)"><div class="t"><span>Отбор</span><em class="tag mute" id="otTag">—</em></div><div class="num" id="otN">—</div><div class="d" id="otD">&nbsp;</div></div>
      <div class="tile" data-k="atm" style="--c:#B79CF0"><div class="t"><span>Атмосфера</span><em class="tag mute" id="atmTag">—</em></div><div class="num" id="atmN">—</div><div class="d">над холодильником</div></div>
      <div class="tile water" data-k="flow" style="--c:var(--water)"><div class="t"><span>Вода</span><em class="tag mute" id="wTag">—</em></div>
        <div class="d" id="wD">&nbsp;</div>
        <div class="wgrid">
          <div><div class="wl">Вход</div><div class="wv" id="wIn">—</div></div>
          <div><div class="wl">Выход</div><div class="wv" id="wOut">—</div></div>
          <div><div class="wl">Нагрев Δ</div><div class="wv" id="wDt">—</div></div>
          <div><div class="wl">Расход</div><div class="wv" id="wFl">—</div></div>
        </div>
      </div>
    </div>
    <div class="chips" id="chips"></div>
    <div class="btns" id="btns">
      <button id="bFix" data-cmd="distilla_fix">Фикс</button>
      <button id="bAck" data-cmd="distilla_ack">Заглушить</button>
      <button id="bStop" class="stop">СТОП</button>
    </div>
    <div class="note" id="note">Нагрев включается только руками</div>
  </div>
</ha-card>`;
    const R = this._root;
    R.querySelectorAll("[data-k]").forEach(el => {
      el.tabIndex = 0;
      const open = () => this._more(this._ent[el.dataset.k]);
      el.addEventListener("click", open);
      el.addEventListener("keydown", e => { if (e.key === "Enter") open(); });
    });
    R.querySelectorAll("button[data-cmd]").forEach(b => b.addEventListener("click", () => this._cmd(b.dataset.cmd, b)));
    const stop = R.getElementById("bStop");
    stop.addEventListener("click", () => {
      if (!stop.classList.contains("arm")) {
        stop.classList.add("arm"); stop.textContent = "Точно СТОП?";
        clearTimeout(this._stopT);
        this._stopT = setTimeout(() => { stop.classList.remove("arm"); stop.textContent = "СТОП"; }, 4000);
        return;
      }
      clearTimeout(this._stopT); stop.classList.remove("arm"); stop.textContent = "СТОП";
      this._cmd("distilla_stop", stop);
    });
  }

  _st(k) { const id = this._ent[k]; return id && this._hass ? this._hass.states[id] : undefined; }
  _num(k) { const s = this._st(k); if (!s) return NaN; const v = parseFloat(s.state); return isFinite(v) ? v : NaN; }
  _on(k) { const s = this._st(k); return !!s && s.state === "on"; }
  _f(v, d) { return isFinite(v) ? v.toFixed(d) : "—"; }
  _sg(v, d) { return isFinite(v) ? (v > 0 ? "+" : v < 0 ? "−" : "±") + Math.abs(v).toFixed(d) : "—"; }

  _more(entityId) {
    if (!entityId) return;
    const ev = new Event("hass-more-info", { bubbles: true, composed: true });
    ev.detail = { entityId };
    this.dispatchEvent(ev);
  }

  _cmd(name, btn) {
    if (!this._hass) return;
    this._hass.callService("rest_command", name, {}).then(() => {
      btn.classList.add("done"); setTimeout(() => btn.classList.remove("done"), 1200);
    }).catch(err => {
      btn.textContent = "Ошибка"; setTimeout(() => { btn.textContent = btn.id === "bStop" ? "СТОП" : btn.id === "bFix" ? "Фикс" : "Заглушить"; }, 1800);
      console.warn("Distilla card:", err);
    });
  }

  // 0 — норма, 1 — предупреждение, 2 — не норма (как tsS/otS в прошивке)
  _level(stateKey, alarmKey) {
    if (alarmKey && this._on(alarmKey)) return 2;
    const v = this._num(stateKey);
    return isFinite(v) ? v : -1;
  }

  _render() {
    if (!this._root || !this._hass) return;
    const R = this._root, $ = id => R.getElementById(id), c = this._cfg;
    if (!this._st("cube") && !this._st("run")) {
      $("miss").hidden = false;
      $("miss").textContent = `Не найден датчик ${this._ent.cube}. Подключите пакет distilla.yaml (инструкция на distilla.site) или укажите свои имена в настройке entities.`;
    } else $("miss").hidden = true;

    const run = this._on("run");
    const alarms = [
      ["atm_alarm", "Атмосфера горячая"], ["water_alarm", "Вода пропала"],
      ["heater_cut", "Сработала защита"], ["delta_alarm", "Царга не в норме"],
    ].filter(a => this._on(a[0]));
    const card = R.querySelector("ha-card");
    card.classList.toggle("alarm", alarms.length > 0);
    const pill = $("state");
    pill.className = "pill " + (alarms.length ? "alarm" : run ? "run" : "off");
    pill.querySelector("b").textContent = alarms.length ? alarms[0][1] : run ? "Перегонка идёт" : "Ожидание";

    const mode = this._st("mode");
    $("title").textContent = c.title;
    $("sub").textContent = [mode && mode.state !== "unknown" ? mode.state : null, c.plates ? c.plates + " тар." : null, c.cube_volume ? "куб " + c.cube_volume + " л" : null].filter(Boolean).join(" · ") || "мониторинг перегонки";
    $("plates").textContent = c.plates ? c.plates + " тарелок" : "";
    $("cubeL").textContent = c.cube_volume ? "куб " + c.cube_volume + " л" : "";
    $("tsName").textContent = c.tsarga_label || "Царга";

    const flow = this._num("flow");
    const ap = $("ap");
    ap.classList.toggle("idle", !run);
    ap.classList.toggle("dry", !(isFinite(flow) && flow > 0.05));

    const T = k => this._num(k);
    R.querySelectorAll(".box").forEach(b => { b.querySelector(".v").textContent = isFinite(T(b.dataset.k)) ? this._f(T(b.dataset.k), b.classList.contains("big") && b.dataset.k !== "cube" ? 2 : 1) + " °C" : "—"; });

    const tsL = this._level("ts_state", "delta_alarm"), otL = this._level("ot_state");
    const cls = l => l >= 2 ? "bad" : l === 1 ? "warn" : l === 0 ? "ok" : "";
    const tag = l => l >= 2 ? ["bad", "не норма"] : l === 1 ? ["warn", "внимание"] : l === 0 ? ["", "норма"] : ["mute", "нет фикса"];
    const boxTs = R.querySelector('.box[data-k="tsarga"]'), boxOt = R.querySelector('.box[data-k="otbor"]'), boxAtm = R.querySelector('.box[data-k="atm"]');
    boxTs.className = "box big " + cls(isFinite(T("fix")) ? tsL : -1);
    boxOt.className = "box big " + cls(isFinite(T("dot")) ? otL : -1);
    boxAtm.className = "box " + (this._on("atm_alarm") ? "bad" : "");
    R.querySelector('.box[data-k="wout"]').className = "box " + (this._on("water_alarm") ? "bad" : "water");

    const setTag = (id, l) => { const [k, t] = tag(l); const e = $(id); e.className = "tag " + k; e.textContent = t; };
    $("cubeN").innerHTML = `${this._f(T("cube"), 1)}<small>°C</small>`;
    $("cubeTag").className = "tag " + (run ? "" : "mute"); $("cubeTag").textContent = run ? "работа" : "ожидание";
    $("cubeD").textContent = this._on("heater_cut") ? "сработала защита — нагрев отключён" : " ";
    R.querySelector('.tile[data-k="cube"]').classList.toggle("bad", this._on("heater_cut"));

    $("tsN").innerHTML = `${this._f(T("tsarga"), 2)}<small>°C</small>`;
    if (isFinite(T("fix"))) { setTag("tsTag", tsL); $("tsD").textContent = `Δ ${this._sg(T("dts"), 2)} от фикса ${this._f(T("fix"), 2)}`; }
    else { setTag("tsTag", -1); $("tsD").textContent = "нажмите «Фикс», когда колонна встанет"; }
    R.querySelector('.tile[data-k="tsarga"]').className = "tile " + (isFinite(T("fix")) ? (tsL >= 2 ? "bad" : tsL === 1 ? "warn" : "") : "");

    $("otN").innerHTML = `${this._f(T("otbor"), 2)}<small>°C</small>`;
    if (isFinite(T("dot"))) { setTag("otTag", otL); $("otD").textContent = `Δ ${this._sg(T("dot"), 2)} от фикса`; }
    else { setTag("otTag", -1); $("otD").textContent = "узел отбора"; }
    R.querySelector('.tile[data-k="otbor"]').className = "tile " + (isFinite(T("dot")) ? (otL >= 2 ? "bad" : otL === 1 ? "warn" : "") : "");

    $("atmN").innerHTML = `${this._f(T("atm"), 1)}<small>°C</small>`;
    const atmBad = this._on("atm_alarm"); const at = $("atmTag"); at.className = "tag " + (atmBad ? "bad" : ""); at.textContent = atmBad ? "горячая" : "норма";
    R.querySelector('.tile[data-k="atm"]').classList.toggle("bad", atmBad);

    const wIn = T("win"), wOut = T("wout"), wl = T("water"), wBad = this._on("water_alarm");
    $("wIn").innerHTML = `${this._f(wIn, 1)}<small>°C</small>`;
    $("wOut").innerHTML = `${this._f(wOut, 1)}<small>°C</small>`;
    $("wDt").innerHTML = isFinite(wIn) && isFinite(wOut) ? `${this._sg(wOut - wIn, 1)}<small>°C</small>` : "—";
    $("wFl").innerHTML = isFinite(flow) ? `${this._f(flow, 2)}<small>л/мин</small>` : "—";
    $("wD").textContent = isFinite(wl) ? `Израсходовано с начала перегона: ${this._f(wl, 1)} л` : " ";
    const wt = $("wTag"); wt.className = "tag " + (wBad ? "bad" : isFinite(flow) && flow > 0.05 ? "" : "mute"); wt.textContent = wBad ? "пропала" : isFinite(flow) && flow > 0.05 ? "проток" : "нет протока";
    R.querySelector(".tile.water").classList.toggle("bad", wBad);

    const chips = [];
    if (isFinite(T("pressure"))) chips.push(`<span class="chip">${this._f(T("pressure"), 1)} мм рт. ст.</span>`);
    if (isFinite(T("box"))) chips.push(`<span class="chip">Корпус ${this._f(T("box"), 1)} °C</span>`);
    if (isFinite(T("battery"))) chips.push(`<span class="chip${T("battery") <= 20 ? " bad" : ""}">Батарея ${this._f(T("battery"), 0)} %</span>`);
    if (isFinite(T("rssi")) && T("rssi") < 0) chips.push(`<span class="chip">Wi-Fi ${this._f(T("rssi"), 0)} dBm</span>`);
    const tg = this._st("tg"); if (tg) chips.push(`<span class="chip${tg.state === "on" ? "" : " bad"}">Телеграм ${tg.state === "on" ? "на связи" : "нет связи"}</span>`);
    const fw = this._st("fw"); if (fw && fw.state && fw.state !== "unknown") chips.push(`<span class="chip">v${fw.state}</span>`);
    $("chips").innerHTML = chips.join("");

    $("tiles").hidden = c.show_tiles === false;
    $("btns").hidden = c.show_buttons === false;
    $("note").hidden = c.show_buttons === false;
  }
}

if (!customElements.get("distilla-card")) customElements.define("distilla-card", DistillaCard);
window.customCards = window.customCards || [];
if (!window.customCards.some(x => x.type === "distilla-card")) {
  window.customCards.push({ type: "distilla-card", name: "Distilla 1", description: "Аппарат с анимацией, температуры, дельты, вода и кнопки Distilla 1", preview: true, documentationURL: "https://distilla.site" });
}
console.info(`%c DISTILLA-CARD %c v${DISTILLA_CARD_VERSION} `, "background:#E2A06A;color:#160A03;font-weight:700", "background:#14171A;color:#E9E6E0");
