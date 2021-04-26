function init() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    draw(ctx);
}

function draw(ctx) {

    // calque1/Rectangle
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(595.3, 630.0);
    ctx.lineTo(0.0, 630.0);
    ctx.lineTo(0.0, 0.0);
    ctx.lineTo(595.3, 0.0);
    ctx.lineTo(595.3, 630.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(231, 221, 209)";
    ctx.fill();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(414.3, 300.1);
    ctx.lineTo(351.4, 254.3);
    ctx.bezierCurveTo(348.5, 252.1, 345.2, 250.8, 341.8, 250.1);
    ctx.bezierCurveTo(361.2, 235.6, 373.9, 211.7, 373.9, 184.6);
    ctx.bezierCurveTo(373.9, 163.7, 366.3, 144.6, 353.9, 130.4);
    ctx.bezierCurveTo(352.9, 133.3, 350.2, 135.4, 347.0, 135.4);
    ctx.bezierCurveTo(345.4, 135.4, 343.9, 134.8, 342.6, 133.9);
    ctx.bezierCurveTo(340.9, 136.4, 338.0, 138.0, 334.7, 138.0);
    ctx.bezierCurveTo(330.3, 138.0, 326.6, 135.1, 325.4, 131.1);
    ctx.bezierCurveTo(323.5, 131.8, 321.6, 132.1, 319.5, 132.1);
    ctx.bezierCurveTo(310.4, 132.1, 302.9, 124.7, 302.9, 115.5);
    ctx.bezierCurveTo(302.9, 114.2, 303.1, 112.9, 303.4, 111.6);
    ctx.bezierCurveTo(301.9, 110.3, 300.9, 108.4, 300.9, 106.2);
    ctx.bezierCurveTo(300.9, 105.6, 301.0, 105.0, 301.1, 104.5);
    ctx.bezierCurveTo(300.1, 104.4, 299.0, 104.4, 298.0, 104.4);
    ctx.bezierCurveTo(256.0, 104.4, 222.0, 140.3, 222.0, 184.6);
    ctx.bezierCurveTo(222.0, 212.2, 235.2, 236.5, 255.3, 251.0);
    ctx.bezierCurveTo(252.6, 251.9, 250.1, 253.2, 247.8, 255.1);
    ctx.lineTo(187.6, 304.4);
    ctx.bezierCurveTo(177.5, 312.6, 176.0, 327.5, 184.3, 337.6);
    ctx.lineTo(184.3, 337.6);
    ctx.bezierCurveTo(192.6, 347.7, 207.5, 349.2, 217.5, 340.9);
    ctx.lineTo(241.8, 321.1);
    ctx.lineTo(241.8, 411.8);
    ctx.bezierCurveTo(241.8, 412.0, 241.8, 412.2, 241.8, 412.4);
    ctx.bezierCurveTo(239.1, 415.4, 237.0, 419.2, 236.1, 423.5);
    ctx.lineTo(219.8, 499.5);
    ctx.bezierCurveTo(217.1, 512.3, 225.2, 524.8, 237.9, 527.6);
    ctx.lineTo(237.9, 527.6);
    ctx.bezierCurveTo(250.7, 530.3, 263.3, 522.2, 266.0, 509.4);
    ctx.lineTo(282.3, 433.4);
    ctx.bezierCurveTo(282.7, 431.7, 282.9, 429.9, 282.9, 428.2);
    ctx.lineTo(311.0, 428.2);
    ctx.bezierCurveTo(311.0, 429.7, 311.2, 431.2, 311.4, 432.7);
    ctx.lineTo(325.4, 509.2);
    ctx.bezierCurveTo(327.8, 522.0, 340.1, 530.5, 352.9, 528.2);
    ctx.lineTo(352.9, 528.2);
    ctx.bezierCurveTo(365.8, 525.8, 374.3, 513.5, 371.9, 500.7);
    ctx.lineTo(357.9, 424.2);
    ctx.bezierCurveTo(357.3, 420.6, 355.8, 417.4, 353.9, 414.7);
    ctx.bezierCurveTo(354.0, 413.7, 354.1, 412.8, 354.1, 411.8);
    ctx.lineTo(354.1, 314.7);
    ctx.lineTo(386.5, 338.3);
    ctx.bezierCurveTo(397.0, 345.9, 411.8, 343.6, 419.5, 333.1);
    ctx.lineTo(419.5, 333.1);
    ctx.bezierCurveTo(427.1, 322.5, 424.8, 307.8, 414.3, 300.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(125, 78, 36)";
    ctx.fill();
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgb(66, 41, 24)";
    ctx.stroke();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(277.2, 173.1);
    ctx.bezierCurveTo(277.2, 179.2, 273.6, 184.1, 269.2, 184.1);
    ctx.bezierCurveTo(264.8, 184.1, 261.2, 179.2, 261.2, 173.1);
    ctx.bezierCurveTo(261.2, 167.1, 264.8, 162.1, 269.2, 162.1);
    ctx.bezierCurveTo(273.6, 162.1, 277.2, 167.1, 277.2, 173.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(335.6, 173.1);
    ctx.bezierCurveTo(335.6, 179.2, 332.0, 184.1, 327.6, 184.1);
    ctx.bezierCurveTo(323.1, 184.1, 319.5, 179.2, 319.5, 173.1);
    ctx.bezierCurveTo(319.5, 167.1, 323.1, 162.1, 327.6, 162.1);
    ctx.bezierCurveTo(332.0, 162.1, 335.6, 167.1, 335.6, 173.1);
    ctx.closePath();
    ctx.fill();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(316.1, 210.3);
    ctx.lineWidth = 5.0;
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(277.2, 210.3);
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(241.8, 412.4);
    ctx.lineTo(353.9, 414.7);
    ctx.lineWidth = 4.0;
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(241.8, 402.2);
    ctx.lineTo(353.9, 404.4);
    ctx.stroke();

    // calque1/Groupe

    // calque1/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(206.3, 311.8);
    ctx.bezierCurveTo(203.1, 314.1, 198.8, 313.4, 196.6, 310.4);
    ctx.bezierCurveTo(194.3, 307.3, 195.1, 303.0, 198.2, 300.7);
    ctx.lineWidth = 2.0;
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(222.4, 334.0);
    ctx.bezierCurveTo(219.3, 336.3, 214.9, 335.6, 212.7, 332.6);
    ctx.bezierCurveTo(210.5, 329.5, 211.2, 325.2, 214.3, 322.9);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(206.3, 311.8);
    ctx.bezierCurveTo(209.4, 309.5, 213.7, 310.2, 216.0, 313.2);
    ctx.bezierCurveTo(218.2, 316.3, 217.5, 320.6, 214.3, 322.9);
    ctx.stroke();

    // calque1/Groupe
    ctx.restore();

    // calque1/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(238.0, 496.7);
    ctx.bezierCurveTo(237.3, 500.5, 233.7, 503.1, 230.0, 502.4);
    ctx.bezierCurveTo(226.2, 501.7, 223.8, 498.1, 224.5, 494.3);
    ctx.lineWidth = 2.0;
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(265.0, 501.6);
    ctx.bezierCurveTo(264.3, 505.4, 260.7, 508.0, 257.0, 507.3);
    ctx.bezierCurveTo(253.2, 506.6, 250.8, 503.0, 251.5, 499.2);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(238.0, 496.7);
    ctx.bezierCurveTo(238.6, 492.9, 242.2, 490.4, 246.0, 491.1);
    ctx.bezierCurveTo(249.7, 491.7, 252.2, 495.4, 251.5, 499.2);
    ctx.stroke();

    // calque1/Groupe
    ctx.restore();

    // calque1/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(240.3, 483.6);
    ctx.bezierCurveTo(239.6, 487.4, 236.0, 490.0, 232.3, 489.3);
    ctx.bezierCurveTo(228.5, 488.6, 226.1, 485.0, 226.8, 481.2);
    ctx.lineWidth = 2.0;
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(267.3, 488.5);
    ctx.bezierCurveTo(266.6, 492.3, 263.0, 494.9, 259.3, 494.2);
    ctx.bezierCurveTo(255.6, 493.5, 253.1, 489.9, 253.8, 486.1);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(240.3, 483.6);
    ctx.bezierCurveTo(241.0, 479.8, 244.5, 477.3, 248.3, 478.0);
    ctx.bezierCurveTo(252.0, 478.6, 254.5, 482.3, 253.8, 486.1);
    ctx.stroke();

    // calque1/Groupe
    ctx.restore();

    // calque1/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(341.2, 502.8);
    ctx.bezierCurveTo(341.6, 506.6, 338.9, 510.1, 335.1, 510.5);
    ctx.bezierCurveTo(331.4, 510.9, 328.0, 508.1, 327.6, 504.2);
    ctx.lineWidth = 2.0;
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(368.5, 499.9);
    ctx.bezierCurveTo(368.9, 503.7, 366.2, 507.2, 362.4, 507.6);
    ctx.bezierCurveTo(358.7, 508.0, 355.3, 505.2, 354.9, 501.3);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(341.2, 502.8);
    ctx.bezierCurveTo(340.8, 498.9, 343.5, 495.5, 347.3, 495.1);
    ctx.bezierCurveTo(351.1, 494.7, 354.5, 497.5, 354.9, 501.3);
    ctx.stroke();

    // calque1/Groupe
    ctx.restore();

    // calque1/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(338.7, 488.4);
    ctx.bezierCurveTo(339.1, 492.3, 336.4, 495.7, 332.6, 496.1);
    ctx.bezierCurveTo(328.9, 496.5, 325.5, 493.7, 325.1, 489.9);
    ctx.lineWidth = 2.0;
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(366.0, 485.5);
    ctx.bezierCurveTo(366.4, 489.4, 363.7, 492.8, 359.9, 493.2);
    ctx.bezierCurveTo(356.2, 493.6, 352.8, 490.8, 352.4, 487.0);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(338.7, 488.4);
    ctx.bezierCurveTo(338.3, 484.6, 341.0, 481.1, 344.8, 480.7);
    ctx.bezierCurveTo(348.6, 480.3, 352.0, 483.1, 352.4, 487.0);
    ctx.stroke();

    // calque1/Groupe
    ctx.restore();

    // calque1/Groupe/Trac
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(388.6, 318.0);
    ctx.bezierCurveTo(391.4, 320.6, 391.6, 324.9, 389.1, 327.5);
    ctx.bezierCurveTo(386.6, 330.1, 382.3, 330.1, 379.5, 327.4);
    ctx.lineWidth = 2.0;
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(406.8, 299.0);
    ctx.bezierCurveTo(409.5, 301.7, 409.8, 306.0, 407.3, 308.6);
    ctx.bezierCurveTo(404.8, 311.2, 400.5, 311.2, 397.7, 308.5);
    ctx.stroke();

    // calque1/Groupe/Trac
    ctx.beginPath();
    ctx.moveTo(388.6, 318.0);
    ctx.bezierCurveTo(385.8, 315.3, 385.6, 311.0, 388.1, 308.4);
    ctx.bezierCurveTo(390.6, 305.8, 394.9, 305.8, 397.7, 308.5);
    ctx.stroke();

    // calque1/Ellipse
    // ctx.restore();
    // ctx.beginPath();
    // ctx.moveTo(305.0, 299.4);
    // ctx.bezierCurveTo(305.0, 303.1, 302.1, 306.0, 298.4, 306.0);
    // ctx.bezierCurveTo(294.8, 306.0, 291.8, 303.1, 291.8, 299.4);
    // ctx.bezierCurveTo(291.8, 295.7, 294.8, 292.8, 298.4, 292.8);
    // ctx.bezierCurveTo(302.1, 292.8, 305.0, 295.7, 305.0, 299.4);
    // ctx.closePath();
    // ctx.fillStyle = "rgb(255, 255, 255)";
    // ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(305.0, 322.8);
    ctx.bezierCurveTo(305.0, 326.4, 302.1, 329.4, 298.4, 329.4);
    ctx.bezierCurveTo(294.8, 329.4, 291.8, 326.4, 291.8, 322.8);
    ctx.bezierCurveTo(291.8, 319.1, 294.8, 316.2, 298.4, 316.2);
    ctx.bezierCurveTo(302.1, 316.2, 305.0, 319.1, 305.0, 322.8);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(305.0, 345.8);
    ctx.bezierCurveTo(305.0, 349.4, 302.1, 352.4, 298.4, 352.4);
    ctx.bezierCurveTo(294.8, 352.4, 291.8, 349.4, 291.8, 345.8);
    ctx.bezierCurveTo(291.8, 342.1, 294.8, 339.2, 298.4, 339.2);
    ctx.bezierCurveTo(302.1, 339.2, 305.0, 342.1, 305.0, 345.8);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(305.0, 368.6);
    ctx.bezierCurveTo(305.0, 372.3, 302.1, 375.2, 298.4, 375.2);
    ctx.bezierCurveTo(294.8, 375.2, 291.8, 372.3, 291.8, 368.6);
    ctx.bezierCurveTo(291.8, 365.0, 294.8, 362.0, 298.4, 362.0);
    ctx.bezierCurveTo(302.1, 362.0, 305.0, 365.0, 305.0, 368.6);
    ctx.closePath();
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(265.7, 197.9);
    ctx.bezierCurveTo(265.7, 202.7, 261.3, 206.6, 255.8, 206.6);
    ctx.bezierCurveTo(250.4, 206.6, 246.0, 202.7, 246.0, 197.9);
    ctx.bezierCurveTo(246.0, 193.1, 250.4, 189.2, 255.8, 189.2);
    ctx.bezierCurveTo(261.3, 189.2, 265.7, 193.1, 265.7, 197.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(241, 151, 192)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(349.6, 197.9);
    ctx.bezierCurveTo(349.6, 202.7, 345.2, 206.6, 339.7, 206.6);
    ctx.bezierCurveTo(334.3, 206.6, 329.9, 202.7, 329.9, 197.9);
    ctx.bezierCurveTo(329.9, 193.1, 334.3, 189.2, 339.7, 189.2);
    ctx.bezierCurveTo(345.2, 189.2, 349.6, 193.1, 349.6, 197.9);
    ctx.closePath();
    ctx.fill();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(291.0, 136.0);
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(266.2, 173.1);
    ctx.bezierCurveTo(266.2, 176.1, 265.4, 178.5, 264.5, 178.5);
    ctx.bezierCurveTo(263.5, 178.5, 262.7, 176.1, 262.7, 173.1);
    ctx.bezierCurveTo(262.7, 170.1, 263.5, 167.7, 264.5, 167.7);
    ctx.bezierCurveTo(265.4, 167.7, 266.2, 170.1, 266.2, 173.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // calque1/Ellipse
    ctx.beginPath();
    ctx.moveTo(334.4, 173.1);
    ctx.bezierCurveTo(334.4, 176.1, 333.6, 178.5, 332.6, 178.5);
    ctx.bezierCurveTo(331.7, 178.5, 330.9, 176.1, 330.9, 173.1);
    ctx.bezierCurveTo(330.9, 170.1, 331.7, 167.7, 332.6, 167.7);
    ctx.bezierCurveTo(333.6, 167.7, 334.4, 170.1, 334.4, 173.1);
    ctx.closePath();
    ctx.fill();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(318.0, 222.9);
    ctx.bezierCurveTo(318.0, 228.2, 310.0, 232.5, 300.2, 232.5);
    ctx.bezierCurveTo(290.4, 232.5, 282.5, 228.2, 282.5, 222.9);
    ctx.bezierCurveTo(282.5, 217.5, 290.4, 221.5, 300.2, 221.5);
    ctx.bezierCurveTo(310.0, 221.5, 318.0, 217.5, 318.0, 222.9);
    ctx.closePath();
    ctx.lineWidth = 3.0;
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(353.9, 130.4);
    ctx.fillStyle = "rgb(125, 78, 36)";
    ctx.fill();
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgb(104, 59, 16)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(327.6, 242.3);
    ctx.lineTo(303.9, 255.3);
    ctx.bezierCurveTo(302.3, 253.9, 299.9, 253.1, 297.3, 253.1);
    ctx.bezierCurveTo(294.7, 253.1, 292.4, 253.9, 290.8, 255.1);
    ctx.lineTo(267.3, 242.9);
    ctx.lineTo(267.3, 277.8);
    ctx.lineTo(290.8, 264.5);
    ctx.bezierCurveTo(292.4, 265.8, 294.7, 266.6, 297.3, 266.6);
    ctx.bezierCurveTo(299.8, 266.6, 302.1, 265.8, 303.7, 264.6);
    ctx.lineTo(327.3, 277.2);
    ctx.lineTo(327.6, 242.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(190, 22, 33)";
    ctx.fill();
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "rgb(142, 19, 21)";
    ctx.stroke();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(249.8, 157.2);
    ctx.bezierCurveTo(249.0, 155.3, 254.5, 153.1, 261.6, 149.9);
    ctx.bezierCurveTo(268.7, 146.8, 274.7, 144.0, 275.6, 146.0);
    ctx.bezierCurveTo(276.4, 147.9, 271.3, 152.0, 264.2, 155.1);
    ctx.bezierCurveTo(257.1, 158.2, 250.7, 159.1, 249.8, 157.2);
    ctx.closePath();
    ctx.fillStyle = "rgb(66, 41, 24)";
    ctx.fill();

    // calque1/Trac
    ctx.beginPath();
    ctx.moveTo(323.8, 149.8);
    ctx.bezierCurveTo(324.6, 147.9, 330.0, 150.4, 337.1, 153.6);
    ctx.bezierCurveTo(344.2, 156.7, 350.4, 159.3, 349.5, 161.2);
    ctx.bezierCurveTo(348.7, 163.1, 342.2, 162.1, 335.1, 159.0);
    ctx.bezierCurveTo(328.0, 155.9, 322.9, 151.8, 323.8, 149.8);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}