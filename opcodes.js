window. opcodes = {
  0x00:{m:"NOP",s:1},

  0x3E:{m:"LD A,d8",s:2},
  0x06:{m:"LD B,d8",s:2},
  0x0E:{m:"LD C,d8",s:2}, 
  0x26:{m:"LD H,d8",s:2},
  0x2E:{m:"LD I,d8",s:2},

  0xAF:{m:"XOR A",s:1},

  0x32:{m:"LDD (HL),A",s:1},

  0xCD:{m:"CALL a16",s:3},
  0xC3:{m:"JP a16",s:3},

  0x18:{m:"JR r8",s:2},
  0x20:{m:"JR NZ,r8",s:2},
  0x28:{m:"JR Z,r8",s:2},

  0xE0:{m:"LDH (a8),A",s:2},
  0xF0:{m:"LDH A,(a8)",s:2},

  0xCB:{m:"PREFIX CB",s:1}
};
