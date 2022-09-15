const { StandardColorPalette } = require('./Constants');

//#region StandardColorPalettes
/**
 * Standard color palettes.
 * @constant {Array}
 */
const StandardColorPalettes = [
  {
    palette: StandardColorPalette.HotIron,
    r: [
      0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48,
      50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94,
      96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132,
      134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170,
      172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208,
      210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246,
      248, 250, 252, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    ],
    g: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42,
      44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
      90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128,
      130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166,
      168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204,
      206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242,
      244, 246, 248, 250, 252, 255,
    ],
    b: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76,
      80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156,
      160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232,
      236, 240, 244, 248, 252, 255,
    ],
  },
  {
    palette: StandardColorPalette.Pet,
    r: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45,
      47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 86, 88, 90,
      92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128,
      130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166,
      168, 170, 171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201, 203,
      205, 207, 209, 211, 213, 215, 217, 219, 221, 223, 225, 227, 229, 231, 233, 235, 237, 239, 241,
      243, 245, 247, 249, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    ],
    g: [
      0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48,
      50, 52, 54, 56, 58, 60, 62, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95,
      97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 128, 126, 124, 122,
      120, 118, 116, 114, 112, 110, 108, 106, 104, 102, 100, 98, 96, 94, 92, 90, 88, 86, 84, 82, 80,
      78, 76, 74, 72, 70, 68, 66, 64, 63, 61, 59, 57, 55, 53, 51, 49, 47, 45, 43, 41, 39, 37, 35,
      33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1, 0, 2, 4, 6, 8, 10, 12, 14, 16,
      18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62,
      64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106,
      108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144,
      146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182,
      184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220,
      222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 255,
    ],
    b: [
      0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47,
      49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93,
      95, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127, 129, 131,
      133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169,
      171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201, 203, 205, 207,
      209, 211, 213, 215, 217, 219, 221, 223, 225, 227, 229, 231, 233, 235, 237, 239, 241, 243, 245,
      247, 249, 251, 253, 255, 252, 248, 244, 240, 236, 232, 228, 224, 220, 216, 212, 208, 204, 200,
      196, 192, 188, 184, 180, 176, 172, 168, 164, 160, 156, 152, 148, 144, 140, 136, 132, 128, 124,
      120, 116, 112, 108, 104, 100, 96, 92, 88, 84, 80, 76, 72, 68, 64, 60, 56, 52, 48, 44, 40, 36,
      32, 28, 24, 20, 16, 12, 8, 4, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64,
      68, 72, 76, 80, 85, 89, 93, 97, 101, 105, 109, 113, 117, 121, 125, 129, 133, 137, 141, 145,
      149, 153, 157, 161, 165, 170, 174, 178, 182, 186, 190, 194, 198, 202, 206, 210, 214, 218, 222,
      226, 230, 234, 238, 242, 246, 250, 255,
    ],
  },
  {
    palette: StandardColorPalette.HotMetalBlue,
    r: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 9, 12, 15, 18,
      21, 24, 26, 29, 32, 35, 38, 41, 44, 47, 50, 52, 55, 57, 59, 62, 64, 66, 69, 71, 74, 76, 78,
      81, 83, 85, 88, 90, 93, 96, 99, 102, 105, 108, 111, 114, 116, 119, 122, 125, 128, 131, 134,
      137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 166, 169, 172, 175, 178, 181, 184, 187, 190,
      194, 198, 201, 205, 209, 213, 217, 221, 224, 228, 232, 236, 240, 244, 247, 251, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255,
    ],
    g: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 6, 8,
      9, 11, 13, 15, 17, 19, 21, 23, 24, 26, 28, 30, 32, 34, 36, 38, 40, 41, 43, 45, 47, 49, 51, 53,
      55, 56, 58, 60, 62, 64, 66, 68, 70, 72, 73, 75, 77, 79, 81, 83, 85, 87, 88, 90, 92, 94, 96,
      98, 100, 102, 104, 105, 107, 109, 111, 113, 115, 117, 119, 120, 122, 124, 126, 128, 130, 132,
      134, 136, 137, 139, 141, 143, 145, 147, 149, 151, 152, 154, 156, 158, 160, 162, 164, 166, 168,
      169, 171, 173, 175, 177, 179, 181, 183, 184, 186, 188, 190, 192, 194, 196, 198, 200, 201, 203,
      205, 207, 209, 211, 213, 215, 216, 218, 220, 222, 224, 226, 228, 229, 231, 233, 235, 237, 239,
      240, 242, 244, 246, 248, 250, 251, 253, 255,
    ],
    b: [
      0, 2, 4, 6, 8, 10, 12, 14, 16, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47,
      49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 84, 86, 88, 90, 92,
      94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 117, 119, 121, 123, 125, 127, 129,
      131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167,
      169, 171, 173, 175, 177, 179, 181, 183, 184, 186, 188, 190, 192, 194, 196, 198, 200, 197, 194,
      191, 188, 185, 182, 179, 176, 174, 171, 168, 165, 162, 159, 156, 153, 150, 144, 138, 132, 126,
      121, 115, 109, 103, 97, 91, 85, 79, 74, 68, 62, 56, 50, 47, 44, 41, 38, 35, 32, 29, 26, 24,
      21, 18, 15, 12, 9, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 9, 12,
      15, 18, 21, 24, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 76, 79,
      82, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112, 115, 118, 121, 124, 126, 129, 132, 135, 138,
      141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 176, 179, 182, 185, 188, 191, 194,
      197, 200, 203, 206, 210, 213, 216, 219, 223, 226, 229, 232, 236, 239, 242, 245, 249, 252, 255,
    ],
  },
  {
    palette: StandardColorPalette.Pet20Step,
    r: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 48,
      48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48,
      48, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 96, 96, 96, 96, 96, 96, 96, 96, 96,
      96, 96, 96, 96, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48,
      48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 80, 80, 80, 80, 80, 80, 80, 80,
      80, 80, 80, 80, 80, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 224, 224, 224, 224, 224,
      224, 224, 224, 224, 224, 224, 224, 224, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208,
      208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208, 208,
      208, 208, 208, 208, 208, 208, 208, 208, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192,
      192, 192, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 255, 255, 255, 255,
      255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255, 255,
    ],
    g: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 48,
      48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 80, 80,
      80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96,
      96, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 112, 128, 128, 128, 128, 128,
      128, 128, 128, 128, 128, 128, 128, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 144,
      144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 192, 192, 192, 192, 192, 192, 192,
      192, 192, 192, 192, 192, 192, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224,
      224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 208, 208, 208, 208, 208, 208, 208,
      208, 208, 208, 208, 208, 208, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176,
      144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 96, 96, 96, 96, 96, 96, 96, 96,
      96, 96, 96, 96, 96, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    ],
    b: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
      80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 112, 112, 112, 112, 112, 112, 112, 112, 112,
      112, 112, 112, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 176, 176, 176,
      176, 176, 176, 176, 176, 176, 176, 176, 176, 176, 192, 192, 192, 192, 192, 192, 192, 192, 192,
      192, 192, 192, 192, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 48, 48, 48,
      48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48,
      80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64,
      64, 64, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 96, 96, 96, 96, 96, 96, 96, 96,
      96, 96, 96, 96, 96, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
      255, 255,
    ],
  },
];
Object.freeze(StandardColorPalettes);
//#endregion

//#region ColorPalette
class ColorPalette {
  /**
   * Gets the MONOCHROME1 grayscale color palette.
   * @method
   * @static
   * @returns {Array<number>} Array of color palette ARGB values.
   */
  static getColorPaletteMonochrome1() {
    return this._getGrayscaleColorPalette(true);
  }

  /**
   * Gets the MONOCHROME2 grayscale color palette.
   * @method
   * @static
   * @returns {Array<number>} Array of color palette ARGB values.
   */
  static getColorPaletteMonochrome2() {
    return this._getGrayscaleColorPalette(false);
  }

  /**
   * Gets the PALETTE COLOR color palette.
   * @method
   * @static
   * @param {Pixel} pixel - Pixel object.
   * @returns {Array<number>} Array of color palette ARGB values.
   * @throws Error if palette color LUT is missing.
   */
  static getColorPalettePaletteColor(pixel) {
    const redDescriptor = pixel.getRedPaletteColorLookupTableDescriptor();
    if (redDescriptor === undefined) {
      throw new Error('Palette color LUT is missing from image');
    }

    let size = 0;
    let bits = 0;
    if (Array.isArray(redDescriptor) && redDescriptor.length > 1) {
      size = redDescriptor[0];
      bits = redDescriptor[2];
    }
    size = size === 0 ? 65536 : size;

    const r = new Uint8Array(pixel.getRedPaletteColorLookupTableData().find((o) => o));
    const g = new Uint8Array(pixel.getGreenPaletteColorLookupTableData().find((o) => o));
    const b = new Uint8Array(pixel.getBluePaletteColorLookupTableData().find((o) => o));

    const colorPalette = new Array(size);
    if (r.length === size) {
      for (let i = 0; i < size; i++) {
        colorPalette[i] = (0xff << 0x18) | (r[i] << 0x10) | (g[i] << 0x08) | b[i];
      }
    } else {
      let offset = bits === 16 ? 1 : 0;
      for (let i = 0; i < size; i++, offset += 2) {
        colorPalette[i] = (0xff << 0x18) | (r[offset] << 0x10) | (g[offset] << 0x08) | b[offset];
      }
    }

    return colorPalette;
  }

  /**
   * Gets a standard color palette.
   * @method
   * @static
   * @param {StandardColorPalette} palette - Standard color palette.
   * @returns {Array<number>} Array of color palette ARGB values.
   * @throws Error if standard color palette is not found.
   */
  static getColorPaletteStandard(palette) {
    const standardColorPalette = StandardColorPalettes.find((p) => p.palette === palette);
    if (!standardColorPalette) {
      throw new Error(`Standard color palette not found [${palette}]`);
    }
    const colorPalette = new Array(256);
    for (let i = 0; i < 256; i++) {
      colorPalette[i] =
        (0xff << 0x18) |
        (standardColorPalette.r[i] << 0x10) |
        (standardColorPalette.g[i] << 0x08) |
        standardColorPalette.b[i];
    }

    return colorPalette;
  }

  //#region Private Methods
  /**
   * Gets a grayscale color palette.
   * @method
   * @static
   * @private
   * @param {boolean} reverse - Flag to indicate whether to reverse the color palette.
   * @returns {Array<number>} Array of color palette ARGB values.
   */
  static _getGrayscaleColorPalette(reverse) {
    const colorPalette = new Array(256);
    for (let i = 0, b = reverse ? 255 : 0; i < 256; i++, reverse ? b-- : b++) {
      colorPalette[i] = (0xff << 0x18) | (b << 0x10) | (b << 0x08) | b;
    }

    return colorPalette;
  }
  //#endregion
}
//#endregion

//#region Exports
module.exports = ColorPalette;
//#endregion
