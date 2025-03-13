# Są parówki i są Perlinki

# convert image to JS object with grayscale values

def image_to_js(image):
    return list(image.getdata())

if __name__ == '__main__':
	# test
	from PIL import Image
	image = Image.open('perlin.png').convert('L')
	with open('perlin.js', 'w') as f:
		f.write('var perlin = ' + str(image_to_js(image)) + ';')