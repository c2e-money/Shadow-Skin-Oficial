export default function handler(req, res) {
    const now = new Date();

    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const ist = new Date(utc + 19800000);

    const seed =
        ist.getFullYear() * 10000 +
        (ist.getMonth() + 1) * 100 +
        ist.getDate();

    const keys = [
        "X7Q9LM","P4ZT82","NV8KQ1","R5MX7A","J2WP9L",
        "KD84QT","F9AZ71","MH6XP3","Q8TR5N","UY2LK7",
        "ZP91WX","EG7RM4","CN3TY8","BV5QK2","LA8NP6",
        "XT4MW9","QR6ZH1","DP7KA5","HY9LF3","SM2XQ8",
        "GK5RW7","TN8VC2","AF3ZM9","PJ6LX4","WQ1NH8",
        "RU5KD7","XE9TM2","BC4YP6","LM7QZ1","VH2RA9",
        "KX8MP5","JQ4LT7","NF9WA2","ZD6RK8","CY3XP1",
        "GT5MQ9","HS7VL4","PW2KN6","YA8TR3","ER1ZX7",
        "UM4QP9","FB6LH2","DI9KW5","SQ3MT8","XN7RA4",
        "OV2YP1","KC8TZ6","LR5WX9","ME1QF7","HP4VN3",
        "QT8BK2","AZ6RM5","GX9LP1","JD3TW8","CU7KH4",
        "SN2QX6","VF5MY9","BE8ZR3","WK1PA7","YL4NT2",
        "RM9QH6","TX3VK8","QP7LD1","HF2ZW5","NM8RC4",
        "UG5XP9","KA1TY3","CV6MQ7","DZ9LN2","PB4WR8",
        "XE7KH5","FQ2ZT1","LR8VM6","AY5NP4","JT9QX7",
        "MH3KC2","WN6RL8","SV1TP5","GD8ZX4","QU5MY2",
        "BK9LF7","RC2WA6","EP7TN3","XZ4KH9","NL1QP8",
        "TV6RM5","YM3XD2","AF8WK7","JP5ZL1","HU9QC4",
        "DG2NX8","KR7MT6","VX1LP3","CE8RA5","SQ4WY9",
        "TZ6KH2","BN9XM7","PL3QV8","WR5FD1"
    ];

    const password = keys[seed % keys.length];

    res.status(200).json({
        status: "success",
        password: password
    });
}
