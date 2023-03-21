const posts = [
    {
        "title": "You can't synthesize the microchip without connecting the primary FTP monitor!",
        "url": "outgoing-anybody.info",
        "points": 24,
        "comments": 157
    },
    {
        "title": "If we program the application, we can get to the AI capacitor through the optical IB driver!",
        "url": "skeletal-grasp.name",
        "points": 120,
        "comments": 108
    },
    {
        "title": "The JSON protocol is down, hack the auxiliary panel so we can program the COM bandwidth!",
        "url": "required-feedback.info",
        "points": 268,
        "comments": 197
    },
    {
        "title": "quantifying the bandwidth won't do anything, we need to hack the redundant HEX microchip!",
        "url": "dirty-fava.org",
        "points": 303,
        "comments": 172
    },
    {
        "title": "You can't quantify the pixel without copying the bluetooth DNS monitor!",
        "url": "icky-gang.name",
        "points": 724,
        "comments": 36
    },
    {
        "title": "You can't calculate the alarm without calculating the neural SCSI bus!",
        "url": "focused-savannah.info",
        "points": 904,
        "comments": 10
    },
    {
        "title": "Try to bypass the ADP transmitter, maybe it will compress the open-source system!",
        "url": "villainous-language.info",
        "points": 248,
        "comments": 15
    },
    {
        "title": "I'll transmit the primary CSS panel, that should application the IP microchip!",
        "url": "lean-grandparent.name",
        "points": 375,
        "comments": 103
    },
    {
        "title": "parsing the system won't do anything, we need to synthesize the cross-platform THX hard drive!",
        "url": "lucky-fraudster.net",
        "points": 931,
        "comments": 67
    },
    {
        "title": "I'll input the back-end GB microchip, that should port the TLS protocol!",
        "url": "scented-contract.net",
        "points": 30,
        "comments": 110
    },
    {
        "title": "The EXE firewall is down, hack the multi-byte protocol so we can back up the ADP port!",
        "url": "winged-vendor.name",
        "points": 278,
        "comments": 128
    },
    {
        "title": "I'll generate the 1080p DNS protocol, that should card the API application!",
        "url": "likable-slip.org",
        "points": 257,
        "comments": 39
    },
    {
        "title": "I'll hack the solid state TCP matrix, that should pixel the HTTP card!",
        "url": "devoted-hurry.com",
        "points": 807,
        "comments": 70
    },
    {
        "title": "Use the cross-platform IP matrix, then you can generate the virtual bus!",
        "url": "grouchy-lesbian.info",
        "points": 992,
        "comments": 89
    },
    {
        "title": "connecting the interface won't do anything, we need to override the mobile SQL system!",
        "url": "tan-leek.com",
        "points": 66,
        "comments": 113
    },
    {
        "title": "Try to override the PNG microchip, maybe it will bypass the neural application!",
        "url": "fatal-emanate.name",
        "points": 124,
        "comments": 99
    },
    {
        "title": "The SAS port is down, synthesize the solid state monitor so we can synthesize the XML port!",
        "url": "self-assured-trench.net",
        "points": 370,
        "comments": 188
    },
    {
        "title": "Try to generate the HTTP driver, maybe it will compress the haptic card!",
        "url": "accomplished-adrenaline.biz",
        "points": 72,
        "comments": 142
    },
    {
        "title": "I'll compress the redundant EXE alarm, that should matrix the UTF8 driver!",
        "url": "unfortunate-comedy.com",
        "points": 659,
        "comments": 105
    },
    {
        "title": "If we synthesize the feed, we can get to the HEX capacitor through the neural TLS program!",
        "url": "amazing-herring.name",
        "points": 469,
        "comments": 73
    },
    {
        "title": "Use the neural SSL array, then you can back up the optical microchip!",
        "url": "bitter-flower.info",
        "points": 350,
        "comments": 130
    },
    {
        "title": "If we compress the alarm, we can get to the UDP feed through the 1080p JSON alarm!",
        "url": "powerful-performance.biz",
        "points": 749,
        "comments": 135
    },
    {
        "title": "Try to back up the CLI card, maybe it will navigate the haptic circuit!",
        "url": "queasy-jewelry.name",
        "points": 191,
        "comments": 192
    },
    {
        "title": "Try to calculate the GB program, maybe it will hack the back-end hard drive!",
        "url": "zigzag-sushi.org",
        "points": 281,
        "comments": 120
    },
    {
        "title": "generating the driver won't do anything, we need to calculate the primary SMTP panel!",
        "url": "exciting-alpenhorn.info",
        "points": 899,
        "comments": 177
    },
    {
        "title": "We need to transmit the back-end SCSI hard drive!",
        "url": "left-patriot.net",
        "points": 425,
        "comments": 28
    },
    {
        "title": "We need to reboot the open-source DRAM panel!",
        "url": "sharp-questioner.biz",
        "points": 220,
        "comments": 111
    },
    {
        "title": "I'll hack the digital SCSI feed, that should port the SMS feed!",
        "url": "stained-honey.name",
        "points": 812,
        "comments": 17
    },
    {
        "title": "I'll calculate the cross-platform RSS interface, that should array the RSS monitor!",
        "url": "healthy-mochi.info",
        "points": 330,
        "comments": 138
    },
    {
        "title": "If we synthesize the matrix, we can get to the SSL microchip through the open-source JSON firewall!",
        "url": "faraway-theme.name",
        "points": 789,
        "comments": 193
    }
]

const popularPosts = []

for (let i = 0; i < posts.length; i++) {
    if (posts[i].points > 500) {
        popularPosts.push(posts[i])
    }
}

console.log(popularPosts.length)