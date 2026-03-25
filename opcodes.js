window. OPCODES = {
  0x00:{m:"NOP",s:1},
  0x02:{m:"ld (bc),a",s:1},
  

  0x3E:{m:"ld A,d8",s:2},
  0x06:{m:"ld B,d8",s:2},
  0x0E:{m:"ld C,d8",s:2}, 
  0x26:{m:"ld H,d8",s:2},
  0x2E:{m:"ld I,d8",s:2},

  0xAF:{m:"XOR A",s:1},

  0x32:{m:"ldd (HL),A",s:1},
  0x01:{m:"ld bc,a16",s:3},
  0xCD:{m:"CALL a16",s:3},
  0xC3:{m:"JP a16",s:3},

  0x18:{m:"JR r8",s:2},
  0x20:{m:"JR NZ,r8",s:2},
  0x28:{m:"JR Z,r8",s:2},

  0xE0:{m:"ld (ff00+(a8)),a",s:2},
  0xF0:{m:"ld A,(ff00+(a8))",s:2},

  0xCB:{m:"PREFIX CB",s:1}
};
