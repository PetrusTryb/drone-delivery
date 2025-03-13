var perlin = [130, 110, 117, 136, 148, 174, 185, 155, 109, 58, 50, 88, 127, 174, 182, 138, 92, 88, 129, 152, 137, 146, 168, 152, 110, 98, 120, 123, 87, 41, 41, 88, 130, 141, 124, 124, 154, 178, 172, 151, 139, 105, 83, 107, 150, 160, 125, 100, 111, 128, 137, 140, 141, 115, 89, 106, 148, 165, 136, 103, 104, 134, 162, 157, 176, 142, 130, 146, 164, 186, 190, 170, 145, 109, 89, 103, 127, 147, 134, 93, 65, 87, 158, 200, 194, 199, 205, 181, 141, 106, 95, 92, 76, 55, 63, 103, 140, 163, 161, 156, 165, 174, 176, 180, 184, 168, 145, 148, 168, 154, 109, 88, 107, 140, 164, 164, 152, 113, 82, 98, 136, 141, 102, 73, 87, 141, 197, 204, 175, 124, 94, 111, 141, 157, 155, 154, 168, 172, 159, 147, 147, 130, 93, 66, 62, 96, 160, 200, 205, 215, 215, 191, 156, 104, 71, 81, 102, 115, 122, 138, 165, 194, 194, 165, 136, 109, 115, 152, 187, 211, 203, 177, 161, 126, 99, 110, 141, 179, 185, 152, 117, 69, 48, 77, 111, 112, 85, 81, 116, 179, 220, 208, 128, 79, 59, 90, 128, 134, 115, 119, 155, 185, 178, 151, 137, 114, 91, 90, 102, 119, 136, 147, 156, 173, 178, 158, 129, 80, 57, 90, 135, 157, 145, 135, 155, 191, 196, 153, 102, 49, 50, 105, 158, 206, 206, 162, 124, 82, 76, 113, 154, 196, 193, 142, 93, 45, 42, 83, 116, 113, 89, 99, 146, 198, 204, 166, 84, 53, 63, 111, 148, 141, 100, 91, 127, 156, 143, 111, 97, 93, 107, 130, 145, 138, 113, 98, 106, 125, 131, 112, 84, 47, 46, 93, 141, 153, 120, 95, 112, 157, 181, 150, 98, 38, 31, 82, 135, 181, 174, 125, 83, 44, 45, 86, 126, 179, 198, 160, 112, 69, 74, 120, 151, 135, 94, 93, 137, 179, 168, 120, 43, 50, 95, 142, 160, 137, 87, 67, 85, 112, 119, 102, 84, 77, 98, 133, 152, 134, 89, 69, 85, 107, 101, 68, 38, 12, 26, 73, 112, 122, 92, 62, 65, 111, 165, 168, 129, 65, 30, 53, 95, 133, 125, 79, 42, 24, 45, 82, 104, 152, 198, 193, 160, 132, 140, 170, 182, 147, 87, 70, 96, 116, 98, 62, 52, 94, 146, 158, 138, 113, 91, 76, 67, 89, 127, 133, 106, 72, 68, 99, 124, 113, 81, 79, 113, 143, 125, 74, 38, 15, 29, 62, 83, 104, 105, 80, 58, 79, 141, 175, 159, 107, 55, 50, 75, 106, 106, 72, 42, 52, 96, 116, 102, 118, 168, 193, 182, 179, 189, 187, 169, 129, 84, 66, 66, 59, 48, 43, 107, 154, 180, 153, 110, 96, 114, 116, 90, 98, 138, 148, 114, 67, 55, 88, 118, 112, 88, 98, 144, 188, 176, 122, 83, 60, 70, 92, 101, 130, 149, 126, 87, 76, 110, 144, 142, 116, 90, 88, 106, 133, 139, 114, 88, 104, 144, 143, 104, 88, 117, 147, 148, 163, 177, 160, 124, 100, 99, 102, 88, 68, 65, 83, 159, 191, 191, 146, 101, 98, 135, 149, 123, 114, 126, 119, 84, 54, 70, 118, 148, 132, 92, 95, 142, 196, 203, 162, 126, 108, 121, 142, 149, 169, 179, 152, 111, 79, 80, 94, 93, 94, 111, 136, 156, 179, 180, 153, 127, 133, 151, 138, 95, 66, 76, 94, 96, 117, 141, 128, 95, 91, 125, 147, 133, 112, 112, 134, 210, 214, 184, 141, 116, 118, 143, 158, 148, 133, 107, 72, 43, 45, 97, 149, 160, 122, 74, 77, 123, 180, 206, 190, 175, 174, 187, 191, 181, 173, 161, 144, 122, 91, 59, 42, 37, 61, 124, 181, 206, 210, 183, 148, 132, 130, 131, 120, 98, 71, 49, 40, 37, 62, 103, 116, 105, 123, 163, 175, 153, 137, 156, 190, 208, 186, 145, 129, 141, 140, 127, 131, 151, 154, 113, 63, 43, 70, 131, 156, 131, 76, 42, 67, 113, 152, 168, 174, 191, 219, 224, 195, 159, 114, 92, 106, 125, 123, 85, 46, 32, 50, 112, 176, 205, 192, 140, 107, 111, 107, 98, 104, 121, 117, 77, 41, 33, 45, 83, 121, 144, 179, 195, 168, 128, 114, 149, 195, 151, 125, 95, 109, 146, 143, 106, 104, 145, 173, 149, 106, 92, 120, 156, 147, 99, 42, 33, 82, 127, 140, 125, 127, 162, 208, 211, 163, 112, 54, 43, 88, 135, 162, 143, 104, 85, 72, 88, 127, 157, 150, 111, 95, 113, 106, 85, 99, 141, 164, 137, 99, 87, 74, 79, 113, 155, 202, 203, 151, 100, 75, 101, 142, 103, 85, 71, 94, 134, 134, 102, 102, 145, 186, 185, 157, 145, 161, 175, 150, 100, 47, 49, 102, 144, 143, 106, 96, 132, 183, 190, 144, 92, 41, 45, 102, 154, 193, 190, 158, 137, 101, 75, 88, 115, 127, 123, 131, 153, 134, 96, 100, 146, 183, 177, 149, 136, 103, 76, 91, 131, 183, 195, 151, 101, 64, 68, 95, 103, 101, 101, 118, 143, 141, 112, 102, 124, 160, 190, 199, 200, 210, 206, 175, 136, 89, 75, 101, 126, 124, 104, 106, 138, 184, 193, 152, 105, 58, 63, 120, 173, 223, 236, 213, 192, 145, 91, 72, 80, 102, 142, 182, 202, 169, 110, 104, 149, 195, 196, 166, 146, 116, 92, 96, 114, 140, 150, 132, 107, 82, 77, 92, 143, 159, 163, 158, 157, 152, 135, 111, 94, 98, 138, 183, 206, 219, 209, 184, 166, 138, 108, 93, 89, 90, 108, 137, 162, 196, 203, 170, 128, 79, 71, 119, 171, 224, 240, 216, 195, 169, 133, 98, 74, 79, 132, 188, 203, 165, 108, 105, 152, 199, 194, 147, 115, 107, 124, 130, 112, 86, 80, 98, 117, 124, 122, 127, 151, 174, 176, 155, 137, 143, 151, 131, 90, 57, 75, 126, 160, 178, 168, 151, 147, 147, 135, 112, 92, 82, 101, 132, 152, 179, 185, 157, 120, 70, 58, 101, 153, 199, 199, 164, 144, 150, 159, 135, 91, 67, 95, 139, 151, 122, 87, 101, 150, 199, 193, 138, 98, 103, 141, 147, 107, 52, 42, 87, 133, 153, 141, 133, 108, 131, 132, 109, 92, 113, 150, 147, 106, 58, 51, 87, 118, 134, 123, 105, 105, 126, 150, 148, 126, 97, 82, 91, 107, 133, 141, 118, 83, 40, 37, 85, 137, 173, 157, 113, 93, 117, 157, 150, 105, 61, 60, 87, 99, 84, 73, 99, 148, 204, 210, 163, 123, 117, 134, 127, 84, 36, 41, 97, 145, 155, 119, 93, 52, 63, 64, 49, 38, 62, 110, 125, 103, 76, 70, 84, 96, 107, 109, 101, 96, 110, 134, 141, 128, 104, 78, 65, 63, 68, 72, 60, 40, 13, 17, 62, 110, 141, 117, 66, 44, 83, 153, 168, 124, 61, 28, 42, 62, 79, 100, 128, 160, 206, 227, 202, 168, 137, 109, 82, 50, 19, 34, 89, 135, 140, 92, 50, 41, 33, 36, 39, 35, 42, 66, 87, 96, 118, 134, 123, 102, 103, 128, 137, 121, 103, 98, 101, 103, 113, 113, 90, 60, 32, 28, 42, 46, 34, 30, 57, 100, 133, 118, 69, 43, 78, 151, 173, 131, 62, 22, 41, 78, 126, 161, 164, 161, 177, 201, 201, 181, 138, 87, 60, 50, 34, 39, 75, 116, 136, 106, 61, 84, 66, 74, 89, 89, 78, 73, 89, 117, 162, 182, 150, 108, 100, 130, 146, 124, 96, 86, 96, 108, 142, 161, 134, 87, 44, 46, 80, 100, 92, 74, 86, 124, 164, 161, 118, 87, 102, 147, 153, 112, 55, 39, 79, 126, 175, 188, 159, 131, 124, 141, 153, 142, 116, 92, 90, 95, 82, 70, 87, 125, 162, 155, 115, 129, 111, 121, 141, 143, 129, 119, 133, 159, 192, 186, 138, 93, 79, 101, 112, 93, 83, 105, 134, 148, 175, 185, 152, 105, 70, 85, 128, 148, 137, 115, 123, 160, 200, 200, 160, 129, 126, 138, 124, 84, 43, 53, 107, 153, 186, 168, 119, 87, 76, 91, 103, 97, 96, 115, 139, 149, 133, 110, 120, 154, 195, 197, 161, 171, 141, 141, 164, 180, 184, 184, 192, 206, 201, 155, 101, 74, 65, 77, 89, 87, 102, 135, 154, 153, 157, 158, 143, 123, 119, 144, 169, 172, 155, 144, 165, 200, 227, 218, 188, 172, 153, 119, 79, 48, 42, 83, 134, 157, 158, 119, 67, 37, 28, 51, 79, 88, 110, 152, 188, 204, 194, 161, 145, 159, 195, 219, 203, 168, 120, 105, 136, 174, 205, 212, 205, 201, 163, 102, 74, 82, 83, 82, 96, 122, 157, 166, 141, 112, 85, 85, 112, 138, 175, 195, 176, 146, 117, 127, 168, 200, 204, 180, 169, 182, 170, 112, 62, 50, 79, 130, 148, 130, 106, 82, 57, 33, 19, 44, 91, 123, 148, 167, 187, 210, 221, 194, 150, 127, 146, 190, 200, 123, 70, 55, 99, 150, 189, 185, 159, 144, 107, 75, 86, 118, 118, 97, 105, 149, 195, 189, 136, 90, 42, 41, 92, 146, 203, 210, 158, 106, 65, 77, 126, 156, 147, 118, 121, 156, 167, 133, 98, 99, 135, 166, 148, 104, 81, 92, 101, 82, 53, 57, 102, 145, 159, 141, 136, 164, 200, 196, 146, 102, 101, 141, 156, 89, 43, 40, 89, 140, 167, 145, 107, 93, 77, 81, 115, 148, 138, 99, 97, 142, 198, 207, 163, 117, 63, 52, 98, 152, 207, 208, 152, 97, 47, 42, 80, 108, 104, 85, 95, 133, 163, 159, 144, 149, 175, 184, 151, 105, 91, 121, 143, 125, 81, 58, 86, 126, 132, 103, 92, 121, 173, 193, 155, 108, 94, 115, 121, 94, 64, 51, 74, 104, 110, 84, 62, 66, 84, 114, 141, 154, 131, 98, 107, 151, 205, 224, 198, 169, 131, 114, 133, 162, 200, 206, 169, 125, 67, 30, 36, 54, 66, 83, 111, 142, 161, 160, 160, 176, 199, 198, 168, 137, 122, 130, 142, 133, 99, 64, 65, 83, 76, 54, 58, 96, 161, 197, 167, 119, 89, 96, 107, 133, 131, 101, 76, 71, 53, 41, 57, 92, 140, 167, 152, 125, 90, 85, 123, 165, 199, 205, 193, 192, 192, 182, 166, 154, 162, 179, 178, 155, 111, 63, 43, 43, 65, 109, 146, 159, 143, 120, 129, 162, 188, 186, 171, 166, 145, 115, 104, 113, 117, 101, 78, 61, 32, 25, 60, 109, 177, 206, 168, 117, 73, 77, 112, 151, 175, 154, 112, 87, 52, 45, 84, 136, 194, 202, 151, 99, 53, 60, 113, 153, 168, 153, 143, 159, 187, 191, 159, 123, 110, 130, 148, 140, 126, 111, 98, 89, 95, 121, 141, 140, 108, 79, 98, 142, 164, 150, 138, 150, 139, 106, 96, 117, 149, 153, 121, 83, 38, 35, 84, 140, 201, 210, 158, 103, 52, 55, 107, 134, 175, 179, 151, 126, 86, 70, 104, 154, 208, 208, 151, 95, 40, 35, 79, 117, 126, 104, 91, 109, 145, 156, 125, 87, 68, 83, 100, 98, 110, 136, 146, 135, 117, 100, 95, 92, 73, 69, 103, 147, 156, 122, 99, 113, 121, 120, 129, 153, 187, 194, 162, 121, 68, 52, 94, 147, 203, 206, 150, 95, 41, 38, 87, 141, 170, 168, 147, 132, 117, 116, 139, 166, 194, 182, 129, 78, 23, 8, 37, 63, 64, 44, 38, 60, 97, 109, 80, 44, 23, 37, 65, 80, 116, 160, 168, 147, 102, 54, 38, 41, 57, 92, 130, 153, 151, 121, 99, 104, 119, 139, 152, 161, 187, 210, 203, 175, 118, 73, 81, 118, 172, 195, 164, 120, 73, 66, 104, 161, 158, 127, 105, 109, 135, 163, 166, 154, 149, 138, 106, 67, 28, 20, 38, 47, 37, 24, 34, 62, 97, 102, 71, 39, 12, 25, 70, 109, 160, 182, 155, 115, 63, 28, 30, 47, 92, 143, 155, 140, 134, 139, 137, 124, 130, 148, 145, 124, 129, 169, 198, 192, 152, 98, 75, 84, 126, 172, 175, 150, 119, 115, 140, 147, 135, 107, 97, 113, 154, 179, 157, 121, 110, 122, 118, 87, 65, 73, 90, 90, 72, 62, 81, 112, 145, 145, 112, 81, 44, 43, 90, 144, 198, 198, 144, 94, 52, 50, 80, 105, 150, 178, 155, 115, 108, 137, 148, 125, 128, 148, 137, 97, 77, 106, 143, 151, 144, 123, 103, 97, 115, 145, 151, 135, 116, 117, 135, 102, 111, 120, 133, 150, 175, 173, 135, 98, 101, 140, 154, 127, 110, 125, 146, 145, 124, 111, 126, 155, 186, 185, 155, 125, 79, 61, 97, 149, 204, 207, 155, 107, 75, 88, 127, 151, 180, 181, 140, 97, 87, 111, 119, 97, 110, 146, 146, 105, 68, 70, 92, 104, 125, 147, 150, 142, 133, 122, 107, 90, 73, 73, 88, 54, 91, 133, 152, 155, 159, 152, 130, 112, 136, 186, 201, 175, 162, 180, 204, 205, 190, 172, 168, 176, 181, 173, 161, 151, 129, 114, 130, 159, 184, 173, 138, 113, 105, 123, 145, 151, 157, 150, 128, 107, 100, 109, 112, 102, 110, 129, 127, 103, 68, 51, 64, 85, 135, 186, 197, 178, 134, 84, 60, 55, 42, 30, 36, 60, 110, 148, 141, 116, 98, 109, 134, 151, 185, 215, 207, 181, 168, 183, 205, 211, 215, 204, 177, 149, 112, 99, 121, 148, 174, 178, 167, 158, 131, 103, 99, 114, 139, 149, 133, 109, 88, 92, 118, 137, 140, 130, 128, 138, 131, 106, 93, 98, 83, 63, 75, 114, 177, 216, 200, 162, 97, 48, 51, 74, 70, 44, 35, 113, 159, 172, 137, 92, 57, 70, 118, 154, 189, 193, 163, 136, 120, 130, 148, 157, 180, 189, 156, 107, 50, 42, 91, 141, 189, 194, 159, 127, 81, 60, 88, 129, 173, 175, 133, 90, 48, 53, 103, 147, 155, 131, 124, 148, 140, 103, 93, 117, 111, 87, 98, 146, 204, 212, 165, 115, 57, 40, 80, 122, 128, 98, 86, 160, 200, 203, 159, 110, 58, 48, 85, 122, 154, 149, 115, 89, 73, 79, 94, 103, 135, 158, 136, 87, 37, 42, 102, 154, 192, 175, 126, 92, 60, 66, 111, 155, 201, 205, 163, 118, 63, 45, 83, 126, 131, 100, 90, 117, 125, 113, 118, 145, 135, 99, 102, 148, 198, 194, 138, 87, 41, 47, 101, 146, 158, 138, 132, 208, 240, 231, 178, 126, 62, 36, 67, 105, 123, 101, 66, 56, 59, 66, 65, 58, 74, 98, 91, 60, 35, 63, 129, 179, 201, 169, 120, 101, 94, 110, 139, 161, 198, 221, 204, 167, 102, 52, 56, 81, 76, 51, 55, 88, 109, 110, 115, 135, 137, 125, 132, 161, 193, 177, 120, 70, 35, 51, 99, 128, 145, 158, 178, 210, 241, 229, 173, 117, 54, 36, 79, 122, 125, 83, 57, 76, 110, 119, 90, 57, 38, 47, 61, 58, 55, 85, 138, 182, 196, 167, 139, 144, 163, 169, 152, 132, 145, 185, 201, 181, 133, 82, 61, 56, 36, 27, 54, 96, 120, 109, 93, 100, 123, 151, 164, 167, 178, 168, 125, 77, 51, 67, 91, 91, 97, 133, 178, 163, 202, 203, 155, 100, 41, 37, 93, 141, 142, 101, 89, 126, 178, 185, 137, 87, 50, 56, 86, 98, 91, 90, 117, 155, 166, 143, 132, 154, 190, 193, 150, 104, 92, 126, 152, 142, 128, 117, 104, 85, 52, 44, 83, 129, 155, 135, 105, 102, 124, 151, 152, 138, 149, 163, 140, 95, 77, 98, 110, 90, 71, 89, 131, 120, 165, 180, 142, 89, 32, 30, 87, 137, 147, 123, 121, 160, 208, 206, 153, 102, 72, 92, 133, 147, 124, 89, 93, 125, 130, 103, 90, 113, 160, 180, 146, 98, 75, 91, 108, 99, 112, 142, 152, 132, 92, 75, 106, 151, 182, 176, 153, 148, 148, 136, 111, 93, 113, 149, 142, 101, 93, 128, 150, 128, 90, 73, 91, 108, 130, 133, 104, 64, 21, 26, 81, 132, 163, 167, 171, 195, 216, 189, 130, 87, 71, 110, 166, 190, 174, 126, 101, 110, 95, 56, 38, 54, 94, 123, 112, 84, 73, 90, 105, 104, 135, 184, 198, 175, 138, 118, 133, 155, 184, 205, 208, 204, 182, 128, 75, 47, 60, 99, 108, 83, 89, 140, 178, 174, 145, 109, 98, 122, 104, 87, 73, 57, 32, 38, 85, 137, 184, 200, 192, 193, 182, 144, 98, 69, 56, 90, 149, 191, 212, 185, 140, 113, 79, 47, 37, 41, 50, 65, 76, 82, 97, 119, 135, 145, 179, 210, 201, 169, 150, 151, 149, 133, 138, 177, 206, 208, 190, 141, 84, 45, 30, 51, 73, 73, 80, 117, 159, 186, 198, 177, 142, 120, 91, 84, 93, 92, 70, 60, 93, 144, 187, 187, 159, 144, 135, 124, 108, 88, 60, 64, 109, 159, 210, 208, 157, 111, 79, 78, 91, 88, 73, 69, 87, 111, 129, 134, 136, 150, 181, 192, 163, 126, 125, 151, 146, 106, 86, 114, 148, 153, 163, 159, 126, 83, 51, 58, 88, 100, 92, 88, 115, 159, 203, 200, 157, 94, 82, 108, 137, 138, 106, 79, 100, 146, 176, 155, 115, 100, 111, 136, 145, 129, 86, 61, 87, 135, 188, 191, 142, 97, 81, 110, 140, 137, 117, 108, 126, 151, 149, 117, 98, 110, 143, 155, 126, 91, 98, 136, 137, 93, 61, 72, 98, 105, 134, 165, 153, 115, 87, 101, 136, 149, 121, 82, 88, 132, 177, 175, 130, 106, 105, 134, 155, 147, 123, 110, 123, 146, 155, 133, 107, 101, 111, 133, 147, 142, 109, 70, 67, 94, 141, 168, 148, 118, 114, 143, 162, 148, 121, 117, 146, 175, 161, 104, 74, 92, 116, 110, 76, 51, 68, 108, 109, 69, 37, 48, 79, 95, 125, 154, 154, 138, 135, 160, 193, 203, 155, 78, 60, 99, 150, 162, 133, 144, 145, 151, 138, 114, 113, 137, 149, 134, 117, 117, 131, 139, 128, 108, 108, 125, 130, 106, 77, 69, 94, 140, 161, 153, 157, 163, 147, 113, 74, 75, 123, 164, 156, 106, 88, 118, 131, 97, 58, 51, 75, 103, 94, 58, 30, 49, 98, 128, 136, 125, 125, 145, 168, 185, 198, 206, 158, 79, 57, 94, 144, 169, 157, 143, 154, 157, 131, 98, 105, 144, 149, 111, 78, 90, 127, 145, 128, 95, 94, 125, 160, 157, 119, 88, 83, 113, 142, 146, 162, 166, 137, 91, 40, 40, 95, 143, 145, 109, 105, 143, 159, 128, 95, 100, 125, 138, 118, 84, 50, 58, 107, 145, 139, 103, 102, 142, 168, 159, 147, 153, 128, 87, 86, 122, 159, 165, 149, 102, 130, 161, 150, 117, 115, 138, 134, 93, 52, 52, 83, 103, 105, 104, 122, 155, 194, 197, 161, 126, 96, 88, 95, 102, 136, 169, 155, 109, 52, 44, 96, 144, 145, 107, 100, 139, 168, 159, 142, 148, 169, 175, 152, 119, 72, 56, 89, 127, 127, 101, 106, 147, 161, 128, 100, 105, 99, 93, 113, 148, 165, 140, 107, 86, 124, 154, 142, 110, 102, 122, 131, 109, 64, 30, 33, 52, 85, 125, 151, 167, 199, 220, 202, 165, 107, 58, 51, 67, 124, 180, 174, 129, 74, 69, 120, 166, 174, 142, 125, 147, 173, 179, 167, 160, 158, 155, 144, 127, 93, 76, 100, 135, 149, 140, 139, 159, 159, 121, 87, 79, 73, 81, 107, 132, 131, 99, 77, 117, 152, 151, 115, 84, 70, 95, 131, 144, 116, 59, 35, 53, 104, 153, 157, 138, 153, 193, 199, 163, 94, 42, 49, 85, 152, 196, 173, 124, 75, 82, 135, 179, 205, 191, 161, 152, 162, 170, 154, 123, 90, 82, 99, 113, 112, 112, 130, 161, 190, 190, 169, 156, 151, 142, 118, 89, 65, 68, 86, 92, 79, 67, 83, 145, 183, 167, 120, 89, 63, 72, 115, 150, 149, 111, 88, 106, 153, 178, 150, 106, 104, 142, 156, 122, 65, 44, 81, 131, 191, 205, 158, 104, 57, 64, 116, 159, 196, 195, 158, 131, 134, 153, 139, 95, 47, 46, 86, 118, 128, 122, 129, 155, 192, 196, 160, 126, 128, 152, 144, 103, 73, 81, 99, 93, 68, 62, 97, 139, 187, 189, 154, 124, 83, 64, 90, 126, 145, 138, 134, 152, 185, 190, 149, 103, 93, 118, 124, 90, 49, 54, 107, 158, 208, 202, 143, 89, 38, 36, 80, 120, 159, 162, 127, 98, 111, 147, 146, 104, 62, 70, 118, 151, 145, 106, 90, 113, 151, 158, 125, 91, 100, 139, 139, 99, 81, 112, 142, 134, 94, 66, 90, 123, 168, 173, 149, 133, 109, 94, 105, 126, 146, 154, 153, 155, 162, 159, 138, 117, 120, 136, 131, 100, 72, 92, 147, 191, 211, 171, 104, 61, 24, 18, 42, 67, 105, 132, 124, 106, 109, 129, 132, 110, 85, 97, 141, 175, 159, 90, 45, 55, 80, 88, 70, 54, 83, 140, 154, 123, 117, 148, 168, 149, 94, 54, 74, 119, 143, 126, 107, 116, 136, 149, 147, 142, 147, 152, 139, 114, 87, 87, 113, 137, 168, 180, 160, 134, 112, 123, 164, 194, 188, 131, 75, 58, 52, 52, 52, 50, 73, 119, 145, 142, 119, 98, 99, 112, 106, 102, 128, 168, 169, 107, 51, 40, 38, 42, 49, 58, 102, 159, 171, 153, 154, 167, 157, 119, 60, 34, 71, 132, 143, 114, 97, 119, 157, 173, 154, 132, 134, 147, 132, 91, 42, 42, 94, 146, 190, 189, 156, 132, 107, 106, 132, 155, 155, 123, 97, 99, 114, 120, 106, 86, 83, 109, 137, 141, 112, 81, 91, 125, 125, 98, 104, 149, 178, 152, 106, 85, 66, 63, 84, 107, 141, 161, 153, 141, 151, 164, 142, 94, 37, 31, 84, 151, 167, 145, 134, 155, 177, 162, 123, 99, 114, 149, 150, 110, 54, 42, 88, 139, 173, 155, 112, 89, 66, 64, 89, 114, 134, 140, 139, 145, 162, 169, 152, 127, 101, 91, 99, 103, 90, 85, 113, 149, 143, 103, 101, 144, 187, 189, 159, 138, 115, 109, 127, 149, 160, 142, 112, 100, 127, 162, 151, 103, 48, 47, 103, 183, 208, 198, 181, 185, 182, 154, 121, 104, 113, 140, 149, 130, 87, 55, 69, 101, 114, 89, 58, 50, 41, 45, 72, 103, 128, 137, 140, 152, 174, 183, 162, 134, 106, 95, 100, 101, 105, 123, 150, 167, 154, 119, 107, 130, 174, 210, 210, 191, 164, 144, 143, 147, 136, 108, 89, 93, 135, 175, 162, 114, 67, 78, 137, 193, 226, 224, 192, 167, 146, 139, 143, 141, 124, 110, 119, 138, 131, 94, 68, 69, 58, 42, 47, 66, 70, 70, 93, 128, 140, 119, 105, 121, 155, 166, 139, 106, 94, 116, 137, 136, 148, 168, 169, 153, 141, 135, 123, 108, 130, 184, 208, 192, 170, 148, 128, 106, 78, 73, 97, 130, 179, 199, 161, 110, 71, 93, 152, 160, 200, 203, 162, 120, 91, 103, 134, 142, 114, 83, 97, 141, 167, 144, 106, 90, 64, 54, 81, 116, 119, 99, 107, 145, 153, 119, 98, 117, 155, 165, 132, 94, 87, 119, 143, 139, 154, 172, 155, 119, 116, 142, 138, 100, 93, 131, 155, 141, 137, 141, 125, 90, 50, 54, 103, 152, 205, 208, 154, 99, 58, 73, 124, 114, 156, 167, 130, 86, 54, 62, 90, 98, 82, 74, 104, 153, 192, 186, 155, 137, 104, 87, 111, 145, 138, 99, 94, 130, 151, 142, 136, 157, 190, 194, 159, 121, 96, 96, 101, 95, 116, 143, 129, 92, 97, 137, 143, 103, 84, 100, 112, 99, 113, 147, 148, 113, 60, 45, 84, 133, 192, 203, 154, 100, 50, 45, 82, 59, 86, 99, 78, 49, 33, 44, 58, 54, 49, 76, 130, 179, 224, 228, 197, 170, 131, 104, 113, 132, 126, 98, 87, 105, 136, 168, 183, 191, 201, 199, 182, 161, 121, 73, 51, 52, 76, 98, 84, 54, 60, 104, 126, 110, 100, 107, 110, 103, 115, 137, 135, 108, 58, 31, 59, 108, 172, 201, 174, 133, 79, 42, 43, 44, 43, 52, 55, 50, 65, 87, 81, 53, 38, 76, 142, 188, 233, 236, 195, 154, 118, 101, 99, 96, 105, 115, 108, 92, 113, 166, 190, 172, 146, 141, 161, 176, 144, 77, 46, 62, 86, 87, 65, 46, 39, 62, 99, 121, 136, 140, 139, 142, 136, 117, 98, 87, 55, 34, 59, 106, 163, 192, 181, 165, 133, 88, 57, 84, 65, 72, 89, 99, 130, 152, 130, 85, 47, 64, 119, 161, 206, 210, 162, 114, 93, 105, 111, 96, 111, 143, 136, 98, 99, 141, 155, 120, 74, 70, 114, 153, 146, 102, 87, 115, 139, 128, 102, 87, 62, 56, 91, 135, 159, 149, 137, 147, 142, 117, 100, 99, 78, 62, 85, 130, 166, 167, 150, 148, 151, 139, 111];