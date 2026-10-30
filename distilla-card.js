/*
 * Distilla Card — карточка Home Assistant для Telegram-термометра Distilla 1.
 * Картинка аппарата и анимации взяты из веб-интерфейса прошивки 1.20.
 * Данные — из датчиков пакета distilla.yaml (интеграция RESTful).
 * https://distilla.site
 */
const DISTILLA_CARD_VERSION = "1.0.0";
const APPARATUS_SVG = "<svg viewBox=\"0 0 400 480\" role=\"img\" aria-label=\"Схема аппарата: Куб → ММЦ → 12 тарелок → узел отбора → холодильник\" style=\"position: absolute; inset: 0px; width: 100%; height: 100%; display: block; overflow: visible;\"><defs><linearGradient id=\"gSteel\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#1b2127\"></stop><stop offset=\".2\" stop-color=\"#8d9aa6\"></stop><stop offset=\".48\" stop-color=\"#55626d\"></stop><stop offset=\".8\" stop-color=\"#2d3740\"></stop><stop offset=\"1\" stop-color=\"#151b20\"></stop></linearGradient><linearGradient id=\"gSteelV\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#2a343c\"></stop><stop offset=\".25\" stop-color=\"#8d9aa6\"></stop><stop offset=\".55\" stop-color=\"#4c5964\"></stop><stop offset=\"1\" stop-color=\"#171d22\"></stop></linearGradient><linearGradient id=\"gCopper\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#4f2d14\"></stop><stop offset=\".2\" stop-color=\"#e09256\"></stop><stop offset=\".5\" stop-color=\"#a8602f\"></stop><stop offset=\".82\" stop-color=\"#6a3a1a\"></stop><stop offset=\"1\" stop-color=\"#321b0c\"></stop></linearGradient><radialGradient id=\"gBall\" cx=\".35\" cy=\".3\" r=\".8\"><stop offset=\"0\" stop-color=\"#f6c79c\"></stop><stop offset=\".45\" stop-color=\"#b8683a\"></stop><stop offset=\"1\" stop-color=\"#4a2712\"></stop></radialGradient><linearGradient id=\"gShade\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#fff\" stop-opacity=\".02\"></stop><stop offset=\".18\" stop-color=\"#fff\" stop-opacity=\".30\"></stop><stop offset=\".4\" stop-color=\"#fff\" stop-opacity=\".04\"></stop><stop offset=\".75\" stop-color=\"#000\" stop-opacity=\".30\"></stop><stop offset=\"1\" stop-color=\"#000\" stop-opacity=\".6\"></stop></linearGradient><linearGradient id=\"gGlass\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#cfe6ee\" stop-opacity=\".20\"></stop><stop offset=\".25\" stop-color=\"#cfe6ee\" stop-opacity=\".34\"></stop><stop offset=\".6\" stop-color=\"#cfe6ee\" stop-opacity=\".08\"></stop><stop offset=\"1\" stop-color=\"#cfe6ee\" stop-opacity=\".16\"></stop></linearGradient><linearGradient id=\"gLiqG\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#3c6a22\"></stop><stop offset=\".3\" stop-color=\"#9fdc78\"></stop><stop offset=\".7\" stop-color=\"#6fb04f\"></stop><stop offset=\"1\" stop-color=\"#33581c\"></stop></linearGradient><radialGradient id=\"gGlow\"><stop offset=\"0\" stop-color=\"#F08A3E\" stop-opacity=\".85\"></stop><stop offset=\"1\" stop-color=\"#F08A3E\" stop-opacity=\"0\"></stop></radialGradient><pattern id=\"mmcPack\" x=\"0\" y=\"0\" width=\"9\" height=\"9\" patternUnits=\"userSpaceOnUse\"><circle cx=\"4.5\" cy=\"4.5\" r=\"3\" style=\"fill: none; stroke: rgb(199, 123, 69); stroke-width: 1.2;\"></circle><path d=\"M0 9 L9 0\" style=\"stroke: rgb(224, 146, 86); stroke-width: 0.7; stroke-opacity: 0.7;\"></path><circle cx=\"0\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(233, 168, 119);\"></circle></pattern><clipPath id=\"cWin\"><rect x=\"188\" y=\"140\" width=\"24\" height=\"138\" rx=\"6\"></rect></clipPath><clipPath id=\"cMmc\"><rect x=\"174\" y=\"290\" width=\"52\" height=\"56\" rx=\"3\"></rect></clipPath><clipPath id=\"liqClip\"><path d=\"M120 415.2V444A80 12 0 0 0 280 444V415.2A80 12 0 0 1 120 415.2Z\"></path></clipPath><clipPath id=\"liqClipPot\"><path d=\"M20 387.6V434A105 18 0 0 0 230 434V387.6A105 18 0 0 1 20 387.6Z\"></path></clipPath><clipPath id=\"cJar\"><path d=\"M296 268V330A24 5 0 0 0 344 330V268Z\"></path></clipPath><clipPath id=\"cJarP\"><path d=\"M340 336V438A28 6 0 0 0 396 438V336Z\"></path></clipPath></defs><g style=\"display: inline;\"><ellipse cx=\"200\" cy=\"464\" rx=\"124\" ry=\"15\" style=\"fill: rgb(0, 0, 0); fill-opacity: 0.34;\"></ellipse><ellipse cx=\"320\" cy=\"338\" rx=\"30\" ry=\"5\" style=\"fill: rgb(0, 0, 0); fill-opacity: 0.26;\"></ellipse><path d=\"M58 52H182\" style=\"fill: none; stroke: rgb(29, 37, 44); stroke-width: 9; stroke-linecap: round;\"></path><path d=\"M58 52H182\" style=\"fill: none; stroke: rgb(77, 90, 101); stroke-width: 6; stroke-linecap: round;\"></path><path d=\"M58 88H182\" style=\"fill: none; stroke: rgb(29, 37, 44); stroke-width: 9; stroke-linecap: round;\"></path><path d=\"M58 88H182\" style=\"fill: none; stroke: rgb(77, 90, 101); stroke-width: 6; stroke-linecap: round;\"></path><path class=\"flow\" d=\"M182 88 H62\" style=\"fill: none; stroke: rgb(79, 179, 217); stroke-width: 3; stroke-linecap: round; stroke-dasharray: 8, 8;\"></path><path class=\"flow\" d=\"M62 52 H182\" style=\"fill: none; stroke: rgb(79, 179, 217); stroke-width: 3; stroke-linecap: round; stroke-dasharray: 8, 8;\"></path><circle cx=\"58\" cy=\"88\" r=\"6\" style=\"fill: rgb(18, 24, 29); stroke: rgb(79, 179, 217); stroke-width: 2;\"></circle><circle cx=\"58\" cy=\"52\" r=\"6\" style=\"fill: rgb(18, 24, 29); stroke: rgb(79, 179, 217); stroke-width: 2;\"></circle><circle class=\"nopulse\" cx=\"120\" cy=\"52\" r=\"6\" style=\"fill: none; stroke: rgb(79, 179, 217); stroke-width: 2;\"></circle><circle cx=\"120\" cy=\"52\" r=\"5\" style=\"fill: rgb(79, 179, 217); stroke: var(--s0); stroke-width: 1.5;\"></circle><circle cx=\"120\" cy=\"88\" r=\"5\" style=\"fill: rgb(79, 179, 217); stroke: var(--s0); stroke-width: 1.5;\"></circle><path d=\"M226 130H304Q320 130 320 146V200\" style=\"fill: none; stroke: rgb(42, 22, 10); stroke-width: 9; stroke-linecap: round; stroke-linejoin: round;\"></path><path d=\"M226 130H304Q320 130 320 146V200\" style=\"fill: none; stroke: rgb(168, 96, 47); stroke-width: 6.5; stroke-linecap: round; stroke-linejoin: round;\"></path><path d=\"M228 128H303Q318 128 318 143V198\" style=\"fill: none; stroke: rgb(240, 196, 154); stroke-opacity: 0.65; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round;\"></path><path d=\"M316 200H324L322.5 214H317.5Z\" style=\"fill: url(&quot;#gCopper&quot;); stroke: rgb(42, 22, 10); stroke-width: 1; stroke-linejoin: round;\"></path><rect x=\"314.5\" y=\"199\" width=\"11\" height=\"3.5\" rx=\"1.5\" style=\"fill: rgb(199, 129, 74); stroke: rgb(42, 22, 10); stroke-width: 1;\"></rect><rect x=\"245\" y=\"124\" width=\"7\" height=\"12\" rx=\"1.5\" style=\"fill: rgb(199, 129, 74); stroke: rgb(42, 22, 10); stroke-width: 1;\"></rect><rect x=\"272\" y=\"124\" width=\"7\" height=\"12\" rx=\"1.5\" style=\"fill: rgb(199, 129, 74); stroke: rgb(42, 22, 10); stroke-width: 1;\"></rect><rect x=\"251\" y=\"121\" width=\"22\" height=\"18\" rx=\"5\" style=\"fill: url(&quot;#gBall&quot;); stroke: rgb(42, 22, 10); stroke-width: 1;\"></rect><rect x=\"260.7\" y=\"112\" width=\"2.6\" height=\"9\" style=\"fill: rgb(139, 151, 161); stroke: rgb(14, 19, 23); stroke-width: 0.6;\"></rect><rect x=\"248\" y=\"107.5\" width=\"28\" height=\"5.5\" rx=\"2.75\" style=\"fill: rgb(212, 136, 74); stroke: rgb(14, 19, 23); stroke-width: 1;\"></rect><g transform=\"translate(0,250) scale(1,0.8) translate(0,-268)\"><path d=\"M296 268V330A24 5 0 0 0 344 330V268Z\" style=\"fill: rgb(18, 23, 27);\"></path><g clip-path=\"url(#cJar)\"><path d=\"M296 283.9925320056899V330A24 5 0 0 0 344 330V283.9925320056899A24 5 0 0 1 296 283.9925320056899Z\" style=\"fill: url(&quot;#gLiqG&quot;); transition: 0.6s;\"></path><ellipse cx=\"320\" cy=\"300\" rx=\"24\" ry=\"5\" style=\"fill: rgb(185, 234, 154); fill-opacity: 0.85; transition: 0.6s;\"></ellipse></g><path d=\"M296 268V330A24 5 0 0 0 344 330V268Z\" style=\"fill: url(&quot;#gGlass&quot;); stroke: rgb(107, 122, 134); stroke-opacity: 0.8; stroke-width: 1.6;\"></path><ellipse cx=\"320\" cy=\"268\" rx=\"24\" ry=\"5\" style=\"fill: rgb(12, 17, 21); fill-opacity: 0.55; stroke: rgb(201, 214, 221); stroke-opacity: 0.7;\"></ellipse><rect x=\"301\" y=\"273\" width=\"3\" height=\"52\" rx=\"1.5\" style=\"fill: rgb(255, 255, 255); fill-opacity: 0.28;\"></rect></g><g class=\"fx on\"><circle class=\"drip\" cx=\"320\" cy=\"218\" r=\"2.6\" style=\"fill: rgb(143, 203, 107);\"></circle></g><circle class=\"nopulse\" cx=\"348\" cy=\"256\" r=\"5\" style=\"fill: none; stroke: var(--warn); stroke-width: 2;\"></circle><g style=\"display: inline;\"><rect x=\"168\" y=\"284\" width=\"64\" height=\"68\" style=\"fill: url(&quot;#gSteel&quot;);\"></rect><rect x=\"174\" y=\"290\" width=\"52\" height=\"56\" rx=\"3\" style=\"fill: rgb(15, 21, 25); stroke: rgb(122, 136, 147); stroke-opacity: 0.7;\"></rect><rect x=\"174\" y=\"290\" width=\"52\" height=\"56\" style=\"fill: url(&quot;#mmcPack&quot;);\"></rect><g clip-path=\"url(#cMmc)\"><g class=\"fx on\"><g class=\"fx on\"><rect class=\"shim\" x=\"174\" y=\"290\" width=\"52\" height=\"56\" style=\"fill: rgb(79, 179, 217);\"></rect><rect x=\"174\" y=\"324\" width=\"52\" height=\"22\" style=\"fill: rgb(242, 161, 92); fill-opacity: 0.34;\"></rect><path d=\"M166 324 q6.5 -3 13 0 t13 0 t13 0 t13 0 t13 0 t13 0\" class=\"mfroth\" style=\"fill: none; stroke: rgb(255, 217, 174); stroke-opacity: 0.8; stroke-width: 1.6;\"></path><circle class=\"mb\" cx=\"181\" cy=\"342\" r=\"2.2\" style=\"fill: rgb(255, 231, 200); fill-opacity: 0.85;\"></circle><circle class=\"mb mb2\" cx=\"189\" cy=\"344\" r=\"1.6\" style=\"fill: rgb(255, 231, 200); fill-opacity: 0.85;\"></circle><circle class=\"mb mb3\" cx=\"196\" cy=\"341\" r=\"2.6\" style=\"fill: rgb(255, 231, 200); fill-opacity: 0.85;\"></circle><circle class=\"mb mb2\" cx=\"204\" cy=\"344\" r=\"1.8\" style=\"fill: rgb(255, 231, 200); fill-opacity: 0.85;\"></circle><circle class=\"mb\" cx=\"211\" cy=\"342\" r=\"2.4\" style=\"fill: rgb(255, 231, 200); fill-opacity: 0.85;\"></circle><circle class=\"mb mb3\" cx=\"219\" cy=\"344\" r=\"1.7\" style=\"fill: rgb(255, 231, 200); fill-opacity: 0.85;\"></circle><circle class=\"mb mb2\" cx=\"193\" cy=\"338\" r=\"1.3\" style=\"fill: rgb(255, 231, 200); fill-opacity: 0.8;\"></circle><circle class=\"mb\" cx=\"215\" cy=\"339\" r=\"1.4\" style=\"fill: rgb(255, 231, 200); fill-opacity: 0.8;\"></circle></g><circle class=\"rf\" cx=\"181\" cy=\"292\" r=\"1.5\" style=\"fill: rgb(205, 239, 251);\"></circle><circle class=\"rf rf2\" cx=\"194\" cy=\"292\" r=\"1.5\" style=\"fill: rgb(205, 239, 251);\"></circle><circle class=\"rf rf3\" cx=\"207\" cy=\"292\" r=\"1.5\" style=\"fill: rgb(205, 239, 251);\"></circle><circle class=\"rf rf2\" cx=\"219\" cy=\"292\" r=\"1.5\" style=\"fill: rgb(205, 239, 251);\"></circle><circle class=\"vap\" cx=\"186\" cy=\"318\" r=\"1.5\" style=\"fill: rgb(234, 231, 225);\"></circle><circle class=\"vap\" cx=\"204\" cy=\"312\" r=\"1.5\" style=\"fill: rgb(234, 231, 225); animation-delay: 0.7s;\"></circle><circle class=\"vap\" cx=\"216\" cy=\"320\" r=\"1.5\" style=\"fill: rgb(234, 231, 225); animation-delay: 1.2s;\"></circle></g></g><rect x=\"174\" y=\"290\" width=\"52\" height=\"56\" style=\"fill: url(&quot;#gGlass&quot;);\"></rect><rect x=\"168\" y=\"284\" width=\"64\" height=\"68\" style=\"fill: url(&quot;#gShade&quot;);\"></rect><ellipse cx=\"200\" cy=\"284\" rx=\"32\" ry=\"4\" style=\"fill: rgb(74, 86, 96); stroke: rgb(183, 194, 203); stroke-opacity: 0.6;\"></ellipse><ellipse cx=\"200\" cy=\"284\" rx=\"19\" ry=\"2.8\" style=\"fill: rgb(18, 23, 27); stroke: rgb(183, 194, 203); stroke-opacity: 0.5;\"></ellipse><rect x=\"166\" y=\"349\" width=\"68\" height=\"5\" rx=\"2\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.5;\"></rect><text x=\"160\" y=\"305\" text-anchor=\"end\" style=\"font-size: 14px; fill: var(--acTx2); font-family: &quot;IBM Plex Sans&quot;, sans-serif; font-weight: 600;\">царга ММЦ</text><text x=\"160\" y=\"321\" text-anchor=\"end\" style=\"font-size: 12px; fill: var(--mut); font-family: &quot;IBM Plex Sans&quot;, sans-serif;\">Ø 4″, насадка</text></g><rect x=\"184\" y=\"136\" width=\"32\" height=\"151.5\" style=\"fill: url(&quot;#gSteel&quot;); display: inline;\"></rect><g style=\"display: inline;\"><rect x=\"188\" y=\"140\" width=\"24\" height=\"138\" rx=\"6\" style=\"fill: rgb(15, 21, 25); stroke: rgb(122, 136, 147); stroke-opacity: 0.75;\"></rect><g clip-path=\"url(#cWin)\"><g transform=\"translate(0 276.7) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M210 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.9s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.6s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.5s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0s;\"></circle></g></g><g transform=\"translate(0 264.6) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M190 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.35s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.45s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.25s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.85s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.35s;\"></circle></g></g><g transform=\"translate(0 252.5) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M210 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.7s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.1s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 1s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.3s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.7s;\"></circle></g></g><g transform=\"translate(0 240.5) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M190 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.2s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.8s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.15s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.65s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.2s;\"></circle></g></g><g transform=\"translate(0 228.4) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M210 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.55s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.6s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.5s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.05s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.55s;\"></circle></g></g><g transform=\"translate(0 216.3) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M190 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.9s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.25s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.85s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.9s;\"></circle></g></g><g transform=\"translate(0 204.2) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M210 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.45s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 1s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.3s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.35s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.45s;\"></circle></g></g><g transform=\"translate(0 192.1) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M190 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.1s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.15s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.65s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.7s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.1s;\"></circle></g></g><g transform=\"translate(0 180.0) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M210 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.8s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.5s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.05s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.2s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.8s;\"></circle></g></g><g transform=\"translate(0 167.9) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M190 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.6s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.85s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.55s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.6s;\"></circle></g></g><g transform=\"translate(0 155.8) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M210 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.25s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.3s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.35s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.9s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.25s;\"></circle></g></g><g transform=\"translate(0 143.7) scale(1 0.76)\"><ellipse cx=\"200\" cy=\"0\" rx=\"11.5\" ry=\"3\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.3; stroke: rgb(170, 182, 191); stroke-opacity: 0.85;\"></ellipse><path d=\"M190 0 v4\" style=\"fill: none; stroke: rgb(205, 239, 251); stroke-opacity: 0.6; stroke-width: 1.4; stroke-linecap: round;\"></path><path d=\"M193.5 0 Q200 -8 206.5 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 1.6;\"></path><g class=\"fx on\"><circle class=\"pb\" cx=\"194\" cy=\"-1\" r=\"1.6\" style=\"fill: rgb(205, 239, 251); animation-delay: 1s;\"></circle><circle class=\"pb\" cx=\"206\" cy=\"-1\" r=\"1.5\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.65s;\"></circle><circle class=\"pb\" cx=\"200\" cy=\"0\" r=\"1.3\" style=\"fill: rgb(255, 255, 255); animation-delay: 0.7s;\"></circle><circle class=\"pb\" cx=\"197\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 0.45s;\"></circle><circle class=\"pb\" cx=\"203\" cy=\"0\" r=\"1.1\" style=\"fill: rgb(205, 239, 251); animation-delay: 1s;\"></circle></g></g><g class=\"fx on\" transform=\"translate(0 276)\"><circle class=\"vap\" cx=\"195\" cy=\"-6\" r=\"1.5\" style=\"fill: rgb(234, 231, 225);\"></circle><circle class=\"vap\" cx=\"205\" cy=\"-36\" r=\"1.5\" style=\"fill: rgb(234, 231, 225); animation-delay: 0.5s;\"></circle><circle class=\"vap\" cx=\"199\" cy=\"-66\" r=\"1.5\" style=\"fill: rgb(234, 231, 225); animation-delay: 1s;\"></circle><circle class=\"vap\" cx=\"203\" cy=\"-96\" r=\"1.5\" style=\"fill: rgb(234, 231, 225); animation-delay: 1.4s;\"></circle><circle class=\"vap\" cx=\"196\" cy=\"-126\" r=\"1.5\" style=\"fill: rgb(234, 231, 225); animation-delay: 0.25s;\"></circle><circle class=\"vap\" cx=\"204\" cy=\"-156\" r=\"1.5\" style=\"fill: rgb(234, 231, 225); animation-delay: 0.8s;\"></circle><circle class=\"vap\" cx=\"198\" cy=\"-186\" r=\"1.5\" style=\"fill: rgb(234, 231, 225); animation-delay: 1.7s;\"></circle></g></g><rect x=\"188\" y=\"140\" width=\"24\" height=\"138\" rx=\"6\" style=\"fill: url(&quot;#gGlass&quot;);\"></rect><rect x=\"184\" y=\"136\" width=\"32\" height=\"151.5\" style=\"fill: url(&quot;#gShade&quot;);\"></rect><rect x=\"179\" y=\"268\" width=\"42\" height=\"6\" rx=\"2\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.5;\"></rect></g><g style=\"display: inline;\"><path d=\"M181 284A19 2.8 0 0 0 219 284L219 287.6L181 287.6Z\" style=\"fill: rgb(74, 86, 96);\"></path><path d=\"M181 284A19 2.8 0 0 0 219 284\" style=\"fill: none; stroke: rgb(183, 194, 203); stroke-opacity: 0.6; stroke-width: 1;\"></path></g><text x=\"226\" y=\"250\" style=\"font-size: 13px; fill: var(--mut); font-family: &quot;IBM Plex Sans&quot;, sans-serif; display: none;\">колонна</text><path d=\"M172 125V135A28 5 0 0 0 228 135V125Z\" style=\"fill: url(&quot;#gCopper&quot;);\"></path><path d=\"M172 125V135A28 5 0 0 0 228 135V125Z\" style=\"fill: url(&quot;#gShade&quot;);\"></path><ellipse cx=\"200\" cy=\"125\" rx=\"28\" ry=\"5\" style=\"fill: rgb(201, 125, 68); stroke: rgb(212, 136, 74); stroke-opacity: 0.9; stroke-width: 1.5;\"></ellipse><ellipse cx=\"200\" cy=\"125\" rx=\"13\" ry=\"2.4\" style=\"fill: rgb(58, 32, 14); fill-opacity: 0.7;\"></ellipse><path d=\"M228 130H236\" style=\"stroke: rgb(168, 96, 47); stroke-width: 6.5; stroke-linecap: round;\"></path><path d=\"M189 92V125A11 2.4 0 0 0 211 125V92Z\" style=\"fill: url(&quot;#gSteel&quot;);\"></path><path d=\"M189 92V125A11 2.4 0 0 0 211 125V92Z\" style=\"fill: url(&quot;#gShade&quot;);\"></path><rect x=\"186\" y=\"106\" width=\"28\" height=\"5\" rx=\"2.5\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.55;\"></rect><path d=\"M180 36V92A20 5 0 0 0 220 92V36Z\" style=\"fill: url(&quot;#gSteel&quot;);\"></path><path d=\"M180 50A20 5 0 0 0 220 50M180 59A20 5 0 0 0 220 59M180 68A20 5 0 0 0 220 68M180 77A20 5 0 0 0 220 77M180 86A20 5 0 0 0 220 86\" style=\"fill: none; stroke: rgb(79, 179, 217); stroke-opacity: 0.7; stroke-width: 2;\"></path><path d=\"M180 36V92A20 5 0 0 0 220 92V36Z\" style=\"fill: url(&quot;#gShade&quot;);\"></path><ellipse cx=\"200\" cy=\"36\" rx=\"20\" ry=\"5\" style=\"fill: rgb(61, 73, 83); stroke: rgb(183, 194, 203); stroke-opacity: 0.6;\"></ellipse><ellipse cx=\"200\" cy=\"36\" rx=\"7\" ry=\"2.2\" style=\"fill: rgb(18, 23, 27); fill-opacity: 0.8;\"></ellipse><path d=\"M195 20V35.5A5 1.6 0 0 0 205 36V20Z\" style=\"fill: url(&quot;#gSteel&quot;);\"></path><ellipse cx=\"200\" cy=\"20\" rx=\"5\" ry=\"1.6\" style=\"fill: rgb(170, 182, 191);\"></ellipse><text x=\"226\" y=\"66\" style=\"font-size: 13px; fill: var(--mut); font-family: &quot;IBM Plex Sans&quot;, sans-serif;\">холодильник</text><ellipse cx=\"200\" cy=\"456\" rx=\"120\" ry=\"19\" class=\"heat\" style=\"fill: url(&quot;#gGlow&quot;);\"></ellipse><path d=\"M120 372V444A80 12 0 0 0 280 444V372Z\" style=\"fill: rgb(42, 49, 56); filter: drop-shadow(rgba(232, 129, 63, 0.75) 0px 0px 16px); transition: filter 1s;\"></path><g clip-path=\"url(#liqClip)\"><path d=\"M120 415.2V444A80 12 0 0 0 280 444V415.2A80 12 0 0 1 120 415.2Z\" style=\"fill: rgb(240, 138, 62); fill-opacity: 0.85; transition: fill-opacity 1s;\"></path><path d=\"M120 415.2V444A80 12 0 0 0 280 444V415.2A80 12 0 0 1 120 415.2Z\" style=\"fill: url(&quot;#gCopper&quot;); fill-opacity: 0.35;\"></path><g class=\"fx on\"><circle class=\"bub\" cx=\"140\" cy=\"440\" r=\"2.5\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85;\"></circle><circle class=\"bub bub2\" cx=\"160\" cy=\"446\" r=\"3\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85;\"></circle><circle class=\"bub bub3\" cx=\"184\" cy=\"448\" r=\"2\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85;\"></circle><circle class=\"bub\" cx=\"220\" cy=\"448\" r=\"3\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85; animation-delay: 0.4s;\"></circle><circle class=\"bub bub2\" cx=\"242\" cy=\"444\" r=\"2.5\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85; animation-delay: 1.2s;\"></circle><circle class=\"bub bub3\" cx=\"264\" cy=\"440\" r=\"2\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85; animation-delay: 2s;\"></circle></g><g class=\"fx off\"><circle class=\"bub\" cx=\"172\" cy=\"446\" r=\"1.6\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.7; animation-duration: 4s;\"></circle><circle class=\"bub\" cx=\"232\" cy=\"446\" r=\"1.6\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.7; animation-duration: 4s; animation-delay: 2s;\"></circle></g></g><ellipse cx=\"200\" cy=\"415.2\" rx=\"80\" ry=\"12\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.42; transition: 0.6s;\"></ellipse><ellipse cx=\"168\" cy=\"415.2\" rx=\"30\" ry=\"3.6\" style=\"fill: rgb(255, 255, 255); fill-opacity: 0.28; transition: 0.6s;\"></ellipse><path d=\"M120 372V444A80 12 0 0 0 280 444V372Z\" style=\"fill: url(&quot;#gShade&quot;); stroke: rgb(107, 122, 134); stroke-opacity: 0.75; stroke-width: 1.5;\"></path><path d=\"M120 388A80 12 0 0 0 280 388M120 436A80 12 0 0 0 280 436\" style=\"fill: none; stroke: rgb(201, 210, 217); stroke-opacity: 0.28;\"></path><ellipse cx=\"200\" cy=\"372\" rx=\"80\" ry=\"12\" style=\"fill: rgb(57, 68, 77); stroke: rgb(201, 210, 217); stroke-opacity: 0.7; stroke-width: 1.5;\"></ellipse><ellipse cx=\"200\" cy=\"372\" rx=\"54\" ry=\"7.5\" style=\"fill: rgb(35, 43, 50);\"></ellipse><ellipse cx=\"200\" cy=\"372\" rx=\"17\" ry=\"4.2\" style=\"fill: rgb(201, 125, 68);\"></ellipse><ellipse cx=\"200\" cy=\"372\" rx=\"13.5\" ry=\"3\" style=\"fill: rgb(26, 14, 6);\"></ellipse><path d=\"M188 354V373A12 2.8 0 0 0 212 373V354Z\" style=\"fill: url(&quot;#gCopper&quot;);\"></path><path d=\"M188 354V373A12 2.8 0 0 0 212 373V354Z\" style=\"fill: url(&quot;#gShade&quot;);\"></path><rect x=\"185\" y=\"360\" width=\"30\" height=\"5\" rx=\"2.5\" style=\"fill: url(&quot;#gCopper&quot;); stroke: rgb(240, 196, 154); stroke-opacity: 0.5;\"></rect><g aria-hidden=\"true\" style=\"opacity: 0.95;\"><rect x=\"140\" y=\"402\" width=\"120\" height=\"36\" rx=\"18\" style=\"fill: rgb(13, 10, 8); fill-opacity: 0.55; stroke: rgb(226, 160, 106); stroke-opacity: 0.7; stroke-width: 1.2;\"></rect><text x=\"186\" y=\"426.5\" style=\"font-size: 16px; font-weight: 700; letter-spacing: 0.8px; fill: rgb(255, 227, 200); font-family: &quot;IBM Plex Sans&quot;, sans-serif;\">Distilla</text></g><path class=\"heat\" d=\"M130 468q9-8 18 0t18 0t18 0t18 0t18 0t18 0t18 0t18 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 3; stroke-linecap: round;\"></path><line x1=\"205\" y1=\"22\" x2=\"234\" y2=\"26\" style=\"stroke: rgb(91, 102, 112); stroke-width: 1.5;\"></line><path d=\"M178 129 L166 129 L156 196\" style=\"fill: none; stroke: rgb(91, 102, 112); stroke-width: 1.5;\"></path><circle class=\"pulse\" cx=\"180\" cy=\"129\" r=\"5\" style=\"fill: none; stroke: rgb(143, 203, 107); stroke-width: 2;\"></circle><circle cx=\"180\" cy=\"129\" r=\"5\" style=\"fill: rgb(143, 203, 107); stroke: var(--s0); stroke-width: 1.5;\"></circle><g style=\"display: inline;\"><line x1=\"205\" y1=\"334\" x2=\"234\" y2=\"334\" style=\"stroke: rgb(91, 102, 112); stroke-width: 1.5;\"></line><circle class=\"nopulse\" cx=\"200\" cy=\"334\" r=\"6\" style=\"fill: none; stroke: var(--ok); stroke-width: 2;\"></circle><circle cx=\"200\" cy=\"334\" r=\"5\" style=\"fill: var(--ok); stroke: var(--s0); stroke-width: 1.5;\"></circle></g><line x1=\"195\" y1=\"388\" x2=\"118\" y2=\"388\" style=\"stroke: rgb(91, 102, 112); stroke-width: 1.5;\"></line><circle cx=\"200\" cy=\"388\" r=\"5\" style=\"fill: rgb(232, 129, 63); stroke: var(--s0); stroke-width: 1.5;\"></circle></g><g style=\"display: none;\"><ellipse cx=\"125\" cy=\"462\" rx=\"112\" ry=\"14\" style=\"fill: rgb(0, 0, 0); fill-opacity: 0.34;\"></ellipse><ellipse cx=\"368\" cy=\"446\" rx=\"32\" ry=\"6\" style=\"fill: rgb(0, 0, 0); fill-opacity: 0.3;\"></ellipse><g style=\"display: inline;\"><path d=\"M207 150 V60\" style=\"fill: none; stroke: rgb(29, 37, 44); stroke-width: 8; stroke-linecap: round;\"></path><path d=\"M345 60 V174\" style=\"fill: none; stroke: rgb(29, 37, 44); stroke-width: 8; stroke-linecap: round;\"></path><path d=\"M207 150 V60\" style=\"fill: none; stroke: rgb(77, 90, 101); stroke-width: 5; stroke-linecap: round;\"></path><path d=\"M345 60 V174\" style=\"fill: none; stroke: rgb(77, 90, 101); stroke-width: 5; stroke-linecap: round;\"></path><path class=\"flow\" d=\"M207 150 V60\" style=\"fill: none; stroke: rgb(79, 179, 217); stroke-width: 3; stroke-linecap: round; stroke-dasharray: 8, 8;\"></path><path class=\"flow\" d=\"M345 60 V174\" style=\"fill: none; stroke: rgb(79, 179, 217); stroke-width: 3; stroke-linecap: round; stroke-dasharray: 8, 8;\"></path><circle class=\"nopulse\" cx=\"207\" cy=\"120\" r=\"6\" style=\"fill: none; stroke: rgb(79, 179, 217); stroke-width: 2;\"></circle><circle cx=\"207\" cy=\"120\" r=\"5\" style=\"fill: rgb(79, 179, 217); stroke: var(--s0); stroke-width: 1.5;\"></circle><circle cx=\"345\" cy=\"120\" r=\"5\" style=\"fill: rgb(79, 179, 217); stroke: var(--s0); stroke-width: 1.5;\"></circle><g transform=\"rotate(10 190 166)\"><rect x=\"194\" y=\"150\" width=\"166\" height=\"32\" rx=\"12\" style=\"fill: url(&quot;#gSteelV&quot;); stroke: rgb(139, 151, 161); stroke-opacity: 0.5; stroke-width: 1.5;\"></rect><rect x=\"199\" y=\"155\" width=\"156\" height=\"22\" rx=\"9\" style=\"fill: rgb(79, 179, 217); fill-opacity: 0.24;\"></rect><path class=\"flow\" d=\"M352 160 H204 M352 172 H204\" style=\"fill: none; stroke: rgb(79, 179, 217); stroke-opacity: 0.75; stroke-width: 1.5; stroke-dasharray: 6, 10;\"></path><path d=\"M186 166 H368\" style=\"fill: none; stroke: rgb(58, 32, 14); stroke-width: 8; stroke-linecap: round;\"></path><path d=\"M186 166 H368\" style=\"fill: none; stroke: rgb(176, 103, 47); stroke-width: 5.5; stroke-linecap: round;\"></path><path d=\"M188 164.2 H366\" style=\"fill: none; stroke: rgb(240, 196, 154); stroke-opacity: 0.7; stroke-width: 1.5; stroke-linecap: round;\"></path><rect x=\"200\" y=\"147\" width=\"7\" height=\"38\" rx=\"2.5\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.5;\"></rect><rect x=\"347\" y=\"147\" width=\"7\" height=\"38\" rx=\"2.5\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.5;\"></rect><rect x=\"194\" y=\"150\" width=\"166\" height=\"32\" rx=\"12\" style=\"fill: none; stroke: rgb(255, 255, 255); stroke-opacity: 0.12;\"></rect></g><circle cx=\"207\" cy=\"152\" r=\"4\" style=\"fill: var(--s1); stroke: rgb(79, 179, 217); stroke-width: 2;\"></circle><circle cx=\"345\" cy=\"176\" r=\"4\" style=\"fill: var(--s1); stroke: rgb(79, 179, 217); stroke-width: 2;\"></circle></g><g style=\"display: none;\"><path d=\"M192 166 H368 V324\" style=\"fill: none; stroke: rgb(42, 22, 10); stroke-width: 9; stroke-linecap: round; stroke-linejoin: round;\"></path><path d=\"M192 166 H368 V324\" style=\"fill: none; stroke: rgb(168, 96, 47); stroke-width: 6; stroke-linecap: round; stroke-linejoin: round;\"></path><path d=\"M194 164.4 H366.4 V324\" style=\"fill: none; stroke: rgb(240, 196, 154); stroke-opacity: 0.65; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round;\"></path><circle cx=\"368\" cy=\"254\" r=\"8.5\" style=\"fill: url(&quot;#gBall&quot;);\"></circle><path d=\"M368 245.5 V236\" style=\"stroke: rgb(139, 151, 161); stroke-width: 2.5;\"></path><rect x=\"356\" y=\"231\" width=\"24\" height=\"5\" rx=\"2.5\" style=\"fill: var(--ok); stroke: rgb(14, 19, 23); stroke-width: 1;\"></rect></g><g style=\"display: inline;\"><path d=\"M362 197 Q368 199 368 210 V324\" style=\"fill: none; stroke: rgb(42, 22, 10); stroke-width: 8; stroke-linecap: round;\"></path><path d=\"M362 197 Q368 199 368 210 V324\" style=\"fill: none; stroke: rgb(168, 96, 47); stroke-width: 5; stroke-linecap: round;\"></path><path d=\"M364 197.5 Q366.4 199 366.4 210 V324\" style=\"fill: none; stroke: rgb(240, 196, 154); stroke-opacity: 0.6; stroke-width: 1.3; stroke-linecap: round;\"></path></g><g class=\"fx on\"><circle class=\"drip\" cx=\"368\" cy=\"326\" r=\"3\" style=\"fill: rgb(143, 203, 107);\"></circle></g><path d=\"M340 336V438A28 6 0 0 0 396 438V336Z\" style=\"fill: rgb(18, 23, 27);\"></path><g clip-path=\"url(#cJarP)\"><path d=\"M340 383.4906650071124V438A28 6 0 0 0 396 438V383.4906650071124A28 6 0 0 1 340 383.4906650071124Z\" style=\"fill: url(&quot;#gLiqG&quot;); transition: 0.6s;\"></path><ellipse cx=\"368\" cy=\"410\" rx=\"28\" ry=\"6\" style=\"fill: rgb(185, 234, 154); fill-opacity: 0.85; transition: 0.6s;\"></ellipse></g><path d=\"M340 336V438A28 6 0 0 0 396 438V336Z\" style=\"fill: url(&quot;#gGlass&quot;); stroke: rgb(107, 122, 134); stroke-opacity: 0.8; stroke-width: 1.6;\"></path><ellipse cx=\"368\" cy=\"336\" rx=\"28\" ry=\"6\" style=\"fill: rgb(12, 17, 21); fill-opacity: 0.55; stroke: rgb(201, 214, 221); stroke-opacity: 0.7;\"></ellipse><rect x=\"345\" y=\"342\" width=\"3.5\" height=\"90\" rx=\"1.7\" style=\"fill: rgb(255, 255, 255); fill-opacity: 0.28;\"></rect><circle class=\"nopulse\" cx=\"394\" cy=\"340\" r=\"5\" style=\"fill: none; stroke: var(--warn); stroke-width: 2;\"></circle><ellipse cx=\"125\" cy=\"456\" rx=\"104\" ry=\"17\" class=\"heat\" style=\"fill: url(&quot;#gGlow&quot;);\"></ellipse><path d=\"M20 318V434A105 18 0 0 0 230 434V318Z\" style=\"fill: rgb(42, 49, 56); filter: drop-shadow(rgba(232, 129, 63, 0.75) 0px 0px 16px); transition: filter 1s;\"></path><g clip-path=\"url(#liqClipPot)\"><path d=\"M20 387.6V434A105 18 0 0 0 230 434V387.6A105 18 0 0 1 20 387.6Z\" style=\"fill: rgb(240, 138, 62); fill-opacity: 0.85; transition: fill-opacity 1s;\"></path><path d=\"M20 387.6V434A105 18 0 0 0 230 434V387.6A105 18 0 0 1 20 387.6Z\" style=\"fill: url(&quot;#gCopper&quot;); fill-opacity: 0.35;\"></path><g class=\"fx on\"><circle class=\"bub\" cx=\"44\" cy=\"436\" r=\"2.5\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85;\"></circle><circle class=\"bub bub2\" cx=\"72\" cy=\"446\" r=\"3\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85;\"></circle><circle class=\"bub bub3\" cx=\"100\" cy=\"450\" r=\"2\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85;\"></circle><circle class=\"bub\" cx=\"138\" cy=\"451\" r=\"3\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85; animation-delay: 0.4s;\"></circle><circle class=\"bub bub2\" cx=\"176\" cy=\"448\" r=\"2.5\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85; animation-delay: 1.2s;\"></circle><circle class=\"bub bub3\" cx=\"208\" cy=\"438\" r=\"2\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.85; animation-delay: 2s;\"></circle></g><g class=\"fx off\"><circle class=\"bub\" cx=\"90\" cy=\"446\" r=\"1.6\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.7; animation-duration: 4s;\"></circle><circle class=\"bub\" cx=\"160\" cy=\"446\" r=\"1.6\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.7; animation-duration: 4s; animation-delay: 2s;\"></circle></g></g><ellipse cx=\"125\" cy=\"387.6\" rx=\"105\" ry=\"18\" style=\"fill: rgb(255, 214, 168); fill-opacity: 0.4; transition: 0.6s;\"></ellipse><ellipse cx=\"90\" cy=\"387.6\" rx=\"38\" ry=\"5\" style=\"fill: rgb(255, 255, 255); fill-opacity: 0.26; transition: 0.6s;\"></ellipse><path d=\"M20 318V434A105 18 0 0 0 230 434V318Z\" style=\"fill: url(&quot;#gShade&quot;); stroke: rgb(107, 122, 134); stroke-opacity: 0.75; stroke-width: 1.6;\"></path><path d=\"M20 350A105 18 0 0 0 230 350M20 420A105 18 0 0 0 230 420\" style=\"fill: none; stroke: rgb(201, 210, 217); stroke-opacity: 0.26;\"></path><ellipse cx=\"125\" cy=\"318\" rx=\"105\" ry=\"18\" style=\"fill: rgb(57, 68, 77); stroke: rgb(201, 210, 217); stroke-opacity: 0.7; stroke-width: 1.6;\"></ellipse><ellipse cx=\"125\" cy=\"318\" rx=\"86\" ry=\"13\" style=\"fill: rgb(35, 43, 50);\"></ellipse><g aria-hidden=\"true\"><rect x=\"71\" y=\"411\" width=\"108\" height=\"27\" rx=\"13.5\" style=\"fill: rgb(13, 10, 8); fill-opacity: 0.55; stroke: rgb(226, 160, 106); stroke-opacity: 0.7; stroke-width: 1.2;\"></rect><text x=\"109\" y=\"429.5\" style=\"font-size: 15px; font-weight: 700; letter-spacing: 0.8px; fill: rgb(255, 227, 200); font-family: &quot;IBM Plex Sans&quot;, sans-serif;\">Distilla</text></g><path class=\"heat\" d=\"M42 470q9-8 18 0t18 0t18 0t18 0t18 0t18 0t18 0t18 0t18 0\" style=\"fill: none; stroke: rgb(212, 136, 74); stroke-width: 3; stroke-linecap: round;\"></path><ellipse cx=\"125\" cy=\"318\" rx=\"17\" ry=\"5\" style=\"fill: rgb(93, 107, 118); stroke: rgb(170, 182, 191); stroke-opacity: 0.5;\"></ellipse><g style=\"display: inline;\"><path d=\"M125 318 V198 A32 32 0 0 1 157 166 H192\" style=\"fill: none; stroke: rgb(27, 34, 40); stroke-width: 26; stroke-linejoin: round;\"></path><path d=\"M125 318 V198 A32 32 0 0 1 157 166 H192\" style=\"fill: none; stroke: rgb(70, 83, 94); stroke-width: 21; stroke-linejoin: round;\"></path><path d=\"M125 318 V198 A32 32 0 0 1 157 166 H192\" style=\"fill: none; stroke: rgb(124, 139, 151); stroke-width: 13; stroke-linejoin: round;\"></path><path d=\"M121 318 V199 A36 36 0 0 1 158 162 H192\" style=\"fill: none; stroke: rgb(211, 221, 228); stroke-opacity: 0.55; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round;\"></path></g><g style=\"display: none;\"><path d=\"M125 140 V98 A32 32 0 0 1 189 98 V166 H192\" style=\"fill: none; stroke: rgb(27, 34, 40); stroke-width: 25; stroke-linejoin: round;\"></path><path d=\"M125 140 V98 A32 32 0 0 1 189 98 V166 H192\" style=\"fill: none; stroke: rgb(70, 83, 94); stroke-width: 21; stroke-linejoin: round;\"></path><path d=\"M125 140 V98 A32 32 0 0 1 189 98 V166 H192\" style=\"fill: none; stroke: rgb(135, 149, 160); stroke-width: 13; stroke-linejoin: round;\"></path><path d=\"M120 140 V98 A37 37 0 0 1 184 98 V150\" style=\"fill: none; stroke: rgb(226, 234, 239); stroke-opacity: 0.55; stroke-width: 3; stroke-linecap: round;\"></path><rect x=\"177\" y=\"150\" width=\"24\" height=\"7\" rx=\"3\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.6;\"></rect><rect x=\"150\" y=\"60\" width=\"14\" height=\"9\" rx=\"2\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.6;\"></rect></g><g class=\"fx off\"><circle class=\"vap\" cx=\"125\" cy=\"300\" r=\"2\" style=\"fill: rgb(234, 231, 225);\"></circle><circle class=\"vap\" cx=\"125\" cy=\"262\" r=\"2\" style=\"fill: rgb(234, 231, 225); animation-delay: 0.6s;\"></circle><circle class=\"vap\" cx=\"125\" cy=\"238\" r=\"2\" style=\"fill: rgb(234, 231, 225); animation-delay: 1.2s;\"></circle><circle class=\"vap\" cx=\"125\" cy=\"214\" r=\"2\" style=\"fill: rgb(234, 231, 225); animation-delay: 0.3s;\"></circle></g><rect x=\"186\" y=\"148\" width=\"9\" height=\"36\" rx=\"2.5\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.5;\"></rect><path d=\"M112 318A13 4.2 0 0 0 138 318\" style=\"fill: rgb(70, 83, 94); stroke: rgb(207, 216, 222); stroke-opacity: 0.55;\"></path><g style=\"display: none;\"><rect x=\"114\" y=\"138\" width=\"22\" height=\"66\" style=\"fill: url(&quot;#gCopper&quot;);\"></rect><rect x=\"114\" y=\"138\" width=\"22\" height=\"66\" style=\"fill: url(&quot;#gShade&quot;);\"></rect><rect x=\"114\" y=\"198\" width=\"22\" height=\"16\" style=\"fill: rgb(29, 20, 12);\"></rect><rect x=\"114\" y=\"198\" width=\"22\" height=\"16\" style=\"fill: url(&quot;#gGlass&quot;);\"></rect><path d=\"M105 314 L88 292 L114 222 L136 222 L162 292 L145 314 A20 4.5 0 0 1 105 314 Z\" style=\"fill: url(&quot;#gCopper&quot;); stroke: rgb(138, 90, 53); stroke-width: 1.2; stroke-linejoin: round;\"></path><path d=\"M105 314 L88 292 L114 222 L136 222 L162 292 L145 314 A20 4.5 0 0 1 105 314 Z\" style=\"fill: url(&quot;#gShade&quot;);\"></path><path d=\"M88 292 A37 6 0 0 0 162 292\" style=\"fill: none; stroke: rgb(240, 201, 160); stroke-opacity: 0.5; stroke-width: 1.5;\"></path><path d=\"M100 290 L117 232\" style=\"fill: none; stroke: rgb(246, 214, 180); stroke-opacity: 0.55; stroke-width: 3; stroke-linecap: round;\"></path><ellipse cx=\"125\" cy=\"314\" rx=\"20\" ry=\"4.5\" style=\"fill: none; stroke: rgb(207, 216, 222); stroke-opacity: 0.6; stroke-width: 2;\"></ellipse><rect x=\"110\" y=\"216\" width=\"30\" height=\"8\" rx=\"2.5\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.6;\"></rect><rect x=\"111\" y=\"196\" width=\"28\" height=\"5\" rx=\"2\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.6;\"></rect><rect x=\"111\" y=\"133\" width=\"28\" height=\"8\" rx=\"2.5\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.6;\"></rect></g><rect x=\"104\" y=\"226\" width=\"42\" height=\"9\" rx=\"3\" style=\"fill: url(&quot;#gSteel&quot;); stroke: rgb(170, 182, 191); stroke-opacity: 0.5;\"></rect><path d=\"M110 214 H68 V58\" style=\"fill: none; stroke: rgb(91, 102, 112); stroke-width: 1.5;\"></path><circle cx=\"113\" cy=\"214\" r=\"5\" style=\"fill: rgb(143, 203, 107); stroke: var(--s0); stroke-width: 1.5;\"></circle><circle cx=\"206\" cy=\"432\" r=\"5\" style=\"fill: rgb(232, 129, 63); stroke: var(--s0); stroke-width: 1.5;\"></circle></g></svg>";

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
