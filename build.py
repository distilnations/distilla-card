"""Собирает distilla-card.js из src/card.template.js и src/apparatus.svg."""
import json, re, pathlib
D = pathlib.Path(__file__).parent
VERSION = "1.0.0"
svg = (D / "src/apparatus.svg").read_text(encoding="utf-8")
svg = re.sub(r"<image\b[^>]*>(</image>)?", "", svg)          # логотип с платы в HA не доступен
svg = svg.replace(">Distillo<", ">Distilla<")
svg = re.sub(r"\s+", " ", svg)
tpl = (D / "src/card.template.js").read_text(encoding="utf-8")
out = tpl.replace("__SVG__", json.dumps(svg, ensure_ascii=False)).replace("__VERSION__", VERSION)
(D / "distilla-card.js").write_text(out, encoding="utf-8")
print("distilla-card.js", len(out.encode()), "bytes, v" + VERSION)
