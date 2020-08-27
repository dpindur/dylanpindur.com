var animation_2_text = [
    "First let's walk through decrypting a block normally to get a feel for the process.",
    "Since it's simpler to start at the end, we'll begin with the last block of ciphertext.",
    "The last block of ciphertext is passed into our AES function along with the decryption key.",
    "This outputs an intermediate value. Note that this not yet our plaintext.",
    "To get our plaintext we need to undo the 'chaining' which was performed when the block was encrypted. Since this is block 3, it was 'chained' with block 2.",
    "To undo the chaining we xor the intermediate value with the previous block of ciphertext.",
    "So assuming there is a padding oracle, how can we exploit this? As an attacker we have two things: all 4 ciphertext blocks and the ability to determine whether or not these blocks are correctly padded when decrypted.",
    "To start we'll modify ciphertext block 2 and set all bytes to zero. We'll then submit ciphertext blocks 2 and 3 to the server in an attempt to decrypt ciphertext block 3.",
    "The block decrypts to nothing meaningful and we get a padding error, but that's okay.",
    "We're going to cycle through every possible value for the last byte of ciphertext block 2 until we get a result that has valid padding. It's unlikely to be the actual padding of the plaintext, but it is still valid.",
    "It's safe to assume that the padding value is 1 as this is the most likely outcome. The chance of randomly getting two bytes correct is much lower than getting one.",
    "Since we now know the last byte is 1 and we know the last byte of ciphertext (because we chose it), we can xor these values and determine the final byte of the intemediate block.",
    "Now onto the second last byte, since we want 2 padding values each with the value '2' we use our knowledge of the final byte of the intermediate block to determine what we should put as the final byte of ciphertext.",
    "We then repeat the process from before, cycling through every value until we get a valid padding.",
    "Again we use the known padding value of 2 and the known ciphertext value of 5 to determine the second last intermediate byte.",
    "We repeat these steps backwards until the whole block is done: determine the expected padding, calculate the required ciphertext, cycle through the byte values until we get a valid padding.",
    "Once we know all of the intermediate block we can swap in the original ciphertext, perform the xor operation and obtain the original plaintext. We've just successfully decrypted our first block!",
    "We repeat this process for each block, byte-by-byte extract the intermediate value and then xor this with our ciphertext to obtain the corresponding plaintext block.",
    "Block 0 presents a challenge, if the IV is stored with the key then this is where we stop as we cannot modify it to exploit the padding oracle.",
    "However, if the IV is sent with the ciphertext then we can perform the same process and retrieve the entire message.",
    "We've now successfully decrypted the entire message!",
];

var animation_2_frames = () => [
    animation_2_frame_0,
    animation_2_frame_1,
    animation_2_frame_2,
    animation_2_frame_3,
    animation_2_frame_4,
    animation_2_frame_5,
    animation_2_frame_6,
    animation_2_frame_7,
    animation_2_frame_8,
    animation_2_frame_9,
    animation_2_frame_10,
    animation_2_frame_11,
    animation_2_frame_12,
    animation_2_frame_13,
    animation_2_frame_14,
    animation_2_frame_15,
    animation_2_frame_16,
    animation_2_frame_17,
    animation_2_frame_18,
    animation_2_frame_19,
    animation_2_frame_20,
];

var animation_2_frame_0 = new Frame('anim_2_frame_0', animation_2_text[0], () => [
    anime({
        targets: '#a2_f0_hide_block',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f0_move_block',
        translateY: -158,
        duration: 800,
        elasticity: 300,
        delay: 400,
        autoplay: false
    })
]);

var animation_2_frame_1 = new Frame('anim_2_frame_1', animation_2_text[1], () => [
    anime({
        targets: '#a2_f1_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
]);

var animation_2_frame_2 = new Frame('anim_2_frame_2', animation_2_text[2], () => [
    anime({
        targets: '#a2_f2_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
]);

var animation_2_frame_3 = new Frame('anim_2_frame_3', animation_2_text[3], () => [
    anime({
        targets: '#a2_f3_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
]);

var animation_2_frame_4 = new Frame('anim_2_frame_4', animation_2_text[4], () => [
    anime({
        targets: '#a2_f4_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
]);

var animation_2_frame_5  = new Frame('anim_2_frame_5', animation_2_text[5], () => [
    anime({
        targets: '#a2_f5_fade_out_1',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f5_fade_out_2',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f5_fade_in_1',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f5_fade_in_2',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#a2_f5_fade_in_3',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
]);

var animation_2_frame_6 = new Frame('anim_2_frame_6', animation_2_text[6], () => [
    anime({
        targets: '#a2_f6_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        delay: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f6_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
]);

var animation_2_frame_7  = new Frame('anim_2_frame_7', animation_2_text[7], () => [
    anime({
        targets: '#a2_f7_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
]);

var animation_2_frame_8  = new Frame('anim_2_frame_8', animation_2_text[8], () => [
    anime({
        targets: '#a2_f8_char_0',
        opacity: [
            { value: 1, duration: 50, delay: 0 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_1',
        opacity: [
            { value: 1, duration: 50, delay: 100 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_2',
        opacity: [
            { value: 1, duration: 50, delay: 200 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_3',
        opacity: [
            { value: 1, duration: 50, delay: 300 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_4',
        opacity: [
            { value: 1, duration: 50, delay: 400 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_5',
        opacity: [
            { value: 1, duration: 50, delay: 500 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_6',
        opacity: [
            { value: 1, duration: 50, delay: 600 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_7',
        opacity: [
            { value: 1, duration: 50, delay: 700 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_8',
        opacity: [
            { value: 1, duration: 50, delay: 800 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_9',
        opacity: [
            { value: 1, duration: 50, delay: 900 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_10',
        opacity: [
            { value: 1, duration: 50, delay: 1000 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_11',
        opacity: [
            { value: 1, duration: 50, delay: 1100 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_12',
        opacity: [
            { value: 1, duration: 50, delay: 1200 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_13',
        opacity: [
            { value: 1, duration: 50, delay: 1300 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_14',
        opacity: [
            { value: 1, duration: 50, delay: 1400 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f8_char_15',
        opacity: [
            { value: 1, duration: 50, delay: 1500 },
        ],
        elasticity: 0,
        autoplay: false
    }),
]);

var animation_2_frame_9  = new Frame('anim_2_frame_9', animation_2_text[9], () => [
    anime({
        targets: '#a2_f9_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f9_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
]);

var animation_2_frame_10  = new Frame('anim_2_frame_10', animation_2_text[10], () => [
    anime({
        targets: '#a2_f10_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f10_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
]);

var animation_2_frame_11  = new Frame('anim_2_frame_11', animation_2_text[11], () => [
    anime({
        targets: '#a2_f11_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f11_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
]);

var animation_2_frame_12 = new Frame('anim_2_frame_12', animation_2_text[12], () => [
    anime({
        targets: '#a2_f12_char_0',
        opacity: [
            { value: 1, duration: 50, delay: 0 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_1',
        opacity: [
            { value: 1, duration: 50, delay: 100 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_2',
        opacity: [
            { value: 1, duration: 50, delay: 200 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_3',
        opacity: [
            { value: 1, duration: 50, delay: 300 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_4',
        opacity: [
            { value: 1, duration: 50, delay: 400 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_5',
        opacity: [
            { value: 1, duration: 50, delay: 500 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_6',
        opacity: [
            { value: 1, duration: 50, delay: 600 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_7',
        opacity: [
            { value: 1, duration: 50, delay: 700 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_8',
        opacity: [
            { value: 1, duration: 50, delay: 800 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_9',
        opacity: [
            { value: 1, duration: 50, delay: 900 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_10',
        opacity: [
            { value: 1, duration: 50, delay: 1000 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_11',
        opacity: [
            { value: 1, duration: 50, delay: 1100 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_12',
        opacity: [
            { value: 1, duration: 50, delay: 1200 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_13',
        opacity: [
            { value: 1, duration: 50, delay: 1300 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_14',
        opacity: [
            { value: 1, duration: 50, delay: 1400 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_15',
        opacity: [
            { value: 1, duration: 50, delay: 1500 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),



    anime({
        targets: '#a2_f12_char_16',
        opacity: [
            { value: 1, duration: 50, delay: 1600 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_17',
        opacity: [
            { value: 1, duration: 50, delay: 1700 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_18',
        opacity: [
            { value: 1, duration: 50, delay: 1800 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_19',
        opacity: [
            { value: 1, duration: 50, delay: 1900 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_20',
        opacity: [
            { value: 1, duration: 50, delay: 2000 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_21',
        opacity: [
            { value: 1, duration: 50, delay: 2100 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_22',
        opacity: [
            { value: 1, duration: 50, delay: 2200 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_23',
        opacity: [
            { value: 1, duration: 50, delay: 2300 },
            { value: 0, duration: 50, delay: 50 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f12_char_24',
        opacity: [
            { value: 1, duration: 50, delay: 2400 },
        ],
        elasticity: 0,
        autoplay: false
    }),
]);

var animation_2_frame_13  = new Frame('anim_2_frame_13', animation_2_text[13], () => [
    anime({
        targets: '#a2_f13_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f13_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
]);

var animation_2_frame_14 = new Frame('anim_2_frame_14', animation_2_text[14], () => [
    anime({
        targets: '#a2_f14_pad_2',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_14',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),

    anime({
        targets: '#a2_f14_pad_3',
        opacity: [
            { value: 1, duration: 800, delay: 400 },
            { value: 0, duration: 800, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_3_iv',
        opacity: 1,
        duration: 800,
        delay: 400,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_13',
        opacity: 0,
        duration: 800,
        delay: 1200,
        elasticity: 0,
        autoplay: false
    }),

    anime({
        targets: '#a2_f14_pad_4',
        opacity: [
            { value: 1, duration: 800, delay: 1600 },
            { value: 0, duration: 800, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_4_iv',
        opacity: 1,
        duration: 800,
        delay: 1600,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_12',
        opacity: 0,
        duration: 800,
        delay: 2400,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_5',
        opacity: [
            { value: 1, duration: 800, delay: 2800 },
            { value: 0, duration: 800, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_5_iv',
        opacity: 1,
        duration: 800,
        delay: 2800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_11',
        opacity: 0,
        duration: 800,
        delay: 3600,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_6',
        opacity: [
            { value: 1, duration: 800, delay: 4000 },
            { value: 0, duration: 800, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_6_iv',
        opacity: 1,
        duration: 800,
        delay: 4000,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_10',
        opacity: 0,
        duration: 800,
        delay: 4800,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_7',
        opacity: [
            { value: 1, duration: 800, delay: 5200 },
            { value: 0, duration: 800, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_7_iv',
        opacity: 1,
        duration: 800,
        delay: 5200,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_09',
        opacity: 0,
        duration: 800,
        delay: 6000,
        elasticity: 0,
        autoplay: false
    }),
        
    anime({
        targets: '#a2_f14_pad_8',
        opacity: [
            { value: 1, duration: 800, delay: 6400 },
            { value: 0, duration: 800, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_8_iv',
        opacity: 1,
        duration: 800,
        delay: 6400,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_08',
        opacity: 0,
        duration: 800,
        delay: 7200,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_9',
        opacity: [
            { value: 1, duration: 400, delay: 7600 },
            { value: 0, duration: 400, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_9_iv',
        opacity: 1,
        duration: 400,
        delay: 7600,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_07',
        opacity: 0,
        duration: 800,
        delay: 8000,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_10',
        opacity: [
            { value: 1, duration: 400, delay: 8300 },
            { value: 0, duration: 400, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_10_iv',
        opacity: 1,
        duration: 400,
        delay: 8300,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_06',
        opacity: 0,
        duration: 800,
        delay: 8700,
        elasticity: 0,
        autoplay: false
    }),
        
    anime({
        targets: '#a2_f14_pad_11',
        opacity: [
            { value: 1, duration: 400, delay: 8900 },
            { value: 0, duration: 400, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_11_iv',
        opacity: 1,
        duration: 400,
        delay: 8900,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_05',
        opacity: 0,
        duration: 800,
        delay: 9300,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_12',
        opacity: [
            { value: 1, duration: 400, delay: 9500 },
            { value: 0, duration: 400, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_12_iv',
        opacity: 1,
        duration: 400,
        delay: 9500,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_04',
        opacity: 0,
        duration: 800,
        delay: 9900,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_13',
        opacity: [
            { value: 1, duration: 400, delay: 10100 },
            { value: 0, duration: 400, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_13_iv',
        opacity: 1,
        duration: 400,
        delay: 10100,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_03',
        opacity: 0,
        duration: 800,
        delay: 10500,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_14',
        opacity: [
            { value: 1, duration: 400, delay: 10700 },
            { value: 0, duration: 400, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_14_iv',
        opacity: 1,
        duration: 400,
        delay: 10700,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_02',
        opacity: 0,
        duration: 800,
        delay: 11100,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_15',
        opacity: [
            { value: 1, duration: 400, delay: 11300 },
            { value: 0, duration: 400, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_15_iv',
        opacity: 1,
        duration: 400,
        delay: 11300,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_question_01',
        opacity: 0,
        duration: 800,
        delay: 11700,
        elasticity: 0,
        autoplay: false
    }),
    
    anime({
        targets: '#a2_f14_pad_16',
        opacity: [
            { value: 1, duration: 400, delay: 11900 },
            { value: 0, duration: 400, delay: 0 },
        ],
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f14_pad_16_iv',
        opacity: 1,
        duration: 400,
        delay: 11900,
        elasticity: 0,
        autoplay: false
    }),

]);

var animation_2_frame_15 = new Frame('anim_2_frame_15', animation_2_text[15], () => [
    anime({
        targets: '#a2_f15_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f15_move_block',
        translateY: -62,
        duration: 800,
        elasticity: 300,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f15_fade_in_1',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#a2_f15_fade_in_2',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
]);

var animation_2_frame_16 = new Frame('anim_2_frame_16', animation_2_text[16], () => [
    anime({
        targets: '#a2_f16_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_15',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_14',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 1000,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_13',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 1200,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_12',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 1400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_11',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 1600,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_10',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 1800,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_09',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 2000,
        autoplay: false
    }),

    anime({
        targets: '#a2_f16_xor_08',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 2200,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_07',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 2400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_06',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 2600,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_05',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 2800,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_04',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 3000,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_03',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 3200,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_02',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 3400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_01',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 3600,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_xor_00',
        opacity: 1,
        duration: 400,
        elasticity: 0,
        delay: 3800,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_fade_in_2',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 4200,
        autoplay: false
    }),
    anime({
        targets: '#a2_f16_fade_in_3',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 4600,
        autoplay: false
    }),
]);

var animation_2_frame_17 = new Frame('anim_2_frame_17', animation_2_text[17], () => [
    anime({
        targets: '#a2_f17_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f17_fade_in',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
]);

var animation_2_frame_18 = new Frame('anim_2_frame_18', animation_2_text[18], () => [
    anime({
        targets: '#a2_f18_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f18_fade_in_1',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f18_fade_in_2',
        opacity: 1,
        duration: 800,
        elasticity: 0,
        delay: 800,
        autoplay: false
    }),
]);

var animation_2_frame_19 = new Frame('anim_2_frame_19', animation_2_text[19], () => [
    anime({
        targets: '#a2_f19_fade_out',
        opacity: 0,
        duration: 800,
        elasticity: 0,
        autoplay: false
    }),
    anime({
        targets: '#a2_f19_move',
        translateY: -80,
        duration: 800,
        elasticity: 300,
        delay: 400,
        autoplay: false
    }),
    anime({
        targets: '#a2_f19_fade_in',
        opacity: 1,
        duration: 800,
        delay: 1000,
        elasticity: 0,
        autoplay: false
    }),
]);

var animation_2_frame_20 = new Frame('anim_2_frame_20', animation_2_text[20], () => [
]);