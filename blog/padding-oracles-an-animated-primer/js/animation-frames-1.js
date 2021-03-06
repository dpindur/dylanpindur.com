var animation_1_text = [
    "We have our plaintext, but it's not ready to encrypt yet.",
    "First we need to divide it into blocks. In AES-128 these blocks are 128 bits or 16 bytes long.",
    "Each block is filled with plaintext.",
    "But, now we don't have enough plaintext to fill the last block. So we have to pad it out.",
    "A common padding scheme used is PKCS #7 (Public Key Cryptography Standards #7). In PKCS #7 whole bytes are added and the value of each byte is the number of bytes that are added.",
    "So if we're 4 bytes short, we add 4 bytes of padding where each byte has the value 4 in decimal or '0x04' in hex.",
    "Now that we have our padding scheme, we can complete our final block and start encrypting.",
    "Since we are 11 bytes short, each byte is filled with an 11 in decimal or '0x0b' in hex.",
    "Our plaintext blocks are now ready to go and we can begin with the first block.",
    "Since we're using CBC we need to 'chain' our block with a previous block, but this is the first block. So instead we chain it with an IV (Initialisation Vector). This is just a block which is filled with randomly generated bytes.",
    "These two values are then xor'd together. This is the chaining aspect of CBC.",
    "Now we're ready to perform the actual encryption.",
    "We input our xor'd block and our secret key into our AES function.",
    "This produces our first block of ciphertext.",
    "We carry over our ciphertext block and can now start on the second block.",
    "Like before, we chain (xor) it with the previous block.",
    "Then perform our AES encryption, giving us our second block of ciphertext.",
    "We repeat this for our third block.",
    "And our final block.",
    "We have now successfully encrypted our message.",
];

var animation_1_frames = () => [
    animation_1_frame_0,
    animation_1_frame_1,
    animation_1_frame_2,
    animation_1_frame_3,
    animation_1_frame_4,
    animation_1_frame_5,
    animation_1_frame_6,
    animation_1_frame_7,
    animation_1_frame_8,
    animation_1_frame_9,
    animation_1_frame_10,
    animation_1_frame_11,
    animation_1_frame_12,
    animation_1_frame_13,
    animation_1_frame_14,
    animation_1_frame_15,
    animation_1_frame_16,
    animation_1_frame_17,
    animation_1_frame_18,
    animation_1_frame_19,
];

var animation_1_frame_0 = new Frame('frame_0', animation_1_text[0], () => [
    anime({
        targets: '#frame_0_text',
        translateY: -130,
        duration: 800,
        elasticity: 300,
        autoplay: false
    }),
    anime({
        targets: '#frame_0_block',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    })
]);

var animation_1_frame_1 = new Frame('frame_1', animation_1_text[1], () => [
    anime({
        targets: '#frame_1_block_1',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_00', // H
        translateX: 55.5,
        translateY: 69,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_01', // E
        translateX: 66,
        translateY: 69,
        elasticity: 0,
        delay: 100,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_02', // L
        translateX: 79.5,
        translateY: 69,
        elasticity: 0,
        delay: 200,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_03', // L
        translateX: 92.5,
        translateY: 69,
        elasticity: 0,
        delay: 300,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_04', // O
        translateX: 105,
        translateY: 69,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_05', // _
        translateX: 117.5,
        translateY: 69,
        elasticity: 0,
        delay: 500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_06', // W
        translateX: 128.5,
        translateY: 69,
        elasticity: 0,
        delay: 600,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_07',  // O
        translateX: 138.5,
        translateY: 69,
        elasticity: 0,
        delay: 690,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_08', // R
        translateX: 148.5,
        translateY: 69,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_09', // L
        translateX: 160.5,
        translateY: 69,
        elasticity: 0,
        delay: 900,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_10', // D
        translateX: 173.5,
        translateY: 69,
        elasticity: 0,
        delay: 1000,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_11', // _
        translateX: 186.5,
        translateY: 69,
        elasticity: 0,
        delay: 1100,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_12', // W
        translateX: 198.5,
        translateY: 69,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_13', // H
        translateX: 206.5,
        translateY: 69,
        elasticity: 0,
        delay: 1300,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_14', // O
        translateX: 217.5,
        translateY: 69,
        elasticity: 0,
        delay: 1400,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_15', // _
        translateX: 230,
        translateY: 69,
        elasticity: 0,
        delay: 1500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_block_2',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_16', // W
        translateX: -78,
        translateY: 102,
        elasticity: 0,
        delay: 1500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_17', // A
        translateX: -68,
        translateY: 102,
        elasticity: 0,
        delay: 1600,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_18', // N
        translateX: -57.5,
        translateY: 102,
        elasticity: 0,
        delay: 1700,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_19', // T
        translateX: -45.5,
        translateY: 102,
        elasticity: 0,
        delay: 1800,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_20', // S
        translateX: -34.5,
        translateY: 102,
        elasticity: 0,
        delay: 1900,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_21', // _
        translateX: -19.5,
        translateY: 102,
        elasticity: 0,
        delay: 2000,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_22', // T
        translateX: -7.5,
        translateY: 102,
        elasticity: 0,
        delay: 2100,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_23',
        translateX: 5.5,
        translateY: 102,
        elasticity: 0,
        delay: 2200,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_24', // _
        translateX: 17.5,
        translateY: 102,
        elasticity: 0,
        delay: 2300,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_25', // L
        translateX: 30,
        translateY: 102,
        elasticity: 0,
        delay: 2400,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_26', // E
        translateX: 43,
        translateY: 102,
        elasticity: 0,
        delay: 2500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_27', // A
        translateX: 56.5,
        translateY: 102,
        elasticity: 0,
        delay: 2600,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_28', // R
        translateX: 67,
        translateY: 102,
        elasticity: 0,
        delay: 2700,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_29', // N
        translateX: 78.5,
        translateY: 102,
        elasticity: 0,
        delay: 2800,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_30', // _
        translateX: 91.5,
        translateY: 102,
        elasticity: 0,
        delay: 2900,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_31', // A
        translateX: 104.5,
        translateY: 102,
        elasticity: 0,
        delay: 3000,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_block_3',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 3000,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_32', // B
        translateX: -204.5,
        translateY: 135,
        elasticity: 0,
        delay: 3000,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_33', // O
        translateX: -192.5,
        translateY: 135,
        elasticity: 0,
        delay: 3100,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_34', // U
        translateX: -181.5,
        translateY: 135,
        elasticity: 0,
        delay: 3200,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_35', // T
        translateX: -170.5,
        translateY: 135,
        elasticity: 0,
        delay: 3300,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_36', // _
        translateX: -157,
        translateY: 135,
        elasticity: 0,
        delay: 3400,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_37', // P
        translateX: -145,
        translateY: 135,
        elasticity: 0,
        delay: 3500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_38', // A
        translateX: -132,
        translateY: 135,
        elasticity: 0,
        delay: 3600,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_39', // D
        translateX: -120,
        translateY: 135,
        elasticity: 0,
        delay: 3700,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_40', // D
        translateX: -109.5,
        translateY: 135,
        elasticity: 0,
        delay: 3800,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_41', // I
        translateX: -96.5,
        translateY: 135,
        elasticity: 0,
        delay: 3900,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_42', // N
        translateX: -82.5,
        translateY: 135,
        elasticity: 0,
        delay: 4000,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_43', // G
        translateX: -72,
        translateY: 135,
        elasticity: 0,
        delay: 4100,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_44', // _
        translateX: -58.5,
        translateY: 135,
        elasticity: 0,
        delay: 4200,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_45', // O
        translateX: -46,
        translateY: 135,
        elasticity: 0,
        delay: 4300,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_46', // R
        translateX: -35,
        translateY: 135,
        elasticity: 0,
        delay: 4400,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_47', // A
        translateX: -23,
        translateY: 135,
        elasticity: 0,
        delay: 4500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_block_4',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 4500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_48', // C
        translateX: -331.5,
        translateY: 168,
        elasticity: 0,
        delay: 4500,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_49', // L
        translateX: -319.5,
        translateY: 168,
        elasticity: 0,
        delay: 4600,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_50', // E
        translateX: -305.5,
        translateY: 168,
        elasticity: 0,
        delay: 4700,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_51', // S
        translateX: -293.5,
        translateY: 168,
        elasticity: 0,
        delay: 4800,
        autoplay: false
    }),
    anime({
        targets: '#frame_1_letter_52', // ?
        translateX: -279.5,
        translateY: 168,
        elasticity: 0,
        delay: 4900,
        autoplay: false
    })
]);

var animation_1_frame_2 = new Frame('frame_2', animation_1_text[2], () => [
    anime({
        targets: '#frame_2_blocks_empty rect',
        elasticity: 0,
        fill: '#FFABDF',
        fill: [
            { value: '#FFABDF', duration: 300, delay: 0, elasticity: 100 },
            { value: '#ffff91', duration: 300, delay: 0, elasticity: 100 },
            { value: '#FFABDF', duration: 300, delay: 0, elasticity: 100 },
            { value: '#ffff91', duration: 300, delay: 0, elasticity: 100 },
            { value: '#FFABDF', duration: 300, delay: 0, elasticity: 100 }
        ],
        autoplay: false
    })
]);

var animation_1_frame_3 = new Frame('frame_3', animation_1_text[3], () => [
    anime({
        targets: '#frame_3_blocks',
        opacity: 0,
        duration: 400,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_3_text_new',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 200,
        autoplay: false
    })
]);

var animation_1_frame_4 = new Frame('frame_4', animation_1_text[4], () => [
    anime({
        targets: '#frame_4_text',
        translateY: -125,
        duration: 800,
        elasticity: 300,
        autoplay: false
    }),
    anime({
        targets: '#frame_4_block',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 300,
        autoplay: false
    }),
    anime({
        targets: '#frame_4_block_text',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 300,
        autoplay: false
    }),
    anime({
        targets: '#frame_4_padding_01',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 700,
        autoplay: false
    }),
    anime({
        targets: '#frame_4_padding_02',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#frame_4_padding_03',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 900,
        autoplay: false
    }),
    anime({
        targets: '#frame_4_padding_04',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1000,
        autoplay: false
    })
]);

var animation_1_frame_5 = new Frame('frame_5', animation_1_text[5], () => [
    anime({
        targets: '#frame_5_prev',
        opacity: 0,
        duration: 800,
        elasticity: 300,
        autoplay: false
    }),
    anime({
        targets: '#frame_5_next',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
]);

var animation_1_frame_6 = new Frame('frame_6', animation_1_text[6], () => [
    anime({
        targets: '#frame_6_padding_01',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_02',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 200,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_03',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_04',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 600,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_05',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_06',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1000,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_07',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_08',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1400,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_09',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1600,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_10',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1800,
        autoplay: false
    }),
    anime({
        targets: '#frame_6_padding_11',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 2000,
        autoplay: false
    })
]);

var animation_1_frame_7 = new Frame('frame_7', animation_1_text[7], () => [
    anime({
        targets: '#frame_7_old_block_2_3_4',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_7_block_1',
        translateY: -59,
        elasticity: 0,
        delay: 200,
        autoplay: false
    }),
    anime({
        targets: '#frame_7_text',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    })
]);

var animation_1_frame_8 = new Frame('frame_8', animation_1_text[8], () => [
    anime({
        targets: '#frame_8_iv',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    })
]);

var animation_1_frame_9 = new Frame('frame_9', animation_1_text[9], () => [
    anime({
        targets: '#frame_9_xor',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_00',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 200,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_01',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_02',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 600,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_03',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_04',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1000,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_05',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_06',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1400,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_07',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1600,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_08',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1800,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_09',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 2000,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_10',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 2200,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_11',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 2400,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_12',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 2600,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_13',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 2800,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_14',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 3000,
        autoplay: false
    }),
    anime({
        targets: '#frame_9_letter_15',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 3200,
        autoplay: false
    }),
]);

var animation_1_frame_10 = new Frame('frame_10', animation_1_text[10], () => [
    anime({
        targets: '#frame_10_aes',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
]);

var animation_1_frame_11 = new Frame('frame_11', animation_1_text[11], () => [
    anime({
        targets: '#frame_11_new',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
]);

var animation_1_frame_12 = new Frame('frame_12', animation_1_text[12], () => [
    anime({
        targets: '#frame_12_new',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
]);

var animation_1_frame_13 = new Frame('frame_13', animation_1_text[13], () => [
    anime({
        targets: '#frame_13_prev',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_13_ciphertext',
        translateY: -204.5,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#frame_13_plaintext_2',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
]);

var animation_1_frame_14 = new Frame('frame_14', animation_1_text[14], () => [
    anime({
        targets: '#frame_14_xor',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
]);

var animation_1_frame_15 = new Frame('frame_15', animation_1_text[15], () => [
    anime({
        targets: '#frame_15_new',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
]);

var animation_1_frame_16 = new Frame('frame_16', animation_1_text[16], () => [
    anime({
        targets: '#frame_16_old',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_16_ciphertext',
        translateY: -204.5,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#frame_16_plaintext',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#frame_16_xor',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
    anime({
        targets: '#frame_16_aes',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1600,
        autoplay: false
    }),
    anime({
        targets: '#frame_16_ciphertext_new',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 2000,
        autoplay: false
    }),
]);

var animation_1_frame_17 = new Frame('frame_17', animation_1_text[17], () => [
    anime({
        targets: '#frame_17_old',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_17_ciphertext',
        translateY: -204.5,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#frame_17_plaintext',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#frame_17_xor',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
    anime({
        targets: '#frame_17_aes',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1600,
        autoplay: false
    }),
    anime({
        targets: '#frame_17_ciphertext_new',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 2000,
        autoplay: false
    }),
]);

var animation_1_frame_18 = new Frame('frame_18', animation_1_text[18], () => [
    anime({
        targets: '#frame_18_old',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#frame_18_ciphertext_0',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#frame_18_ciphertext_1',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#frame_18_ciphertext_2',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
    anime({
        targets: '#frame_18_ciphertext_3',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1600,
        autoplay: false
    }),
    // Fade everything out and then fade in ciphertext 1, 2, 3 and 4 one by one
]);

var animation_1_frame_19 = new Frame('frame_19', animation_1_text[19], () => [
    // Nothing, this is the final frame
]);