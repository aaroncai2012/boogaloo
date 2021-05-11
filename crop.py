import os
import cv2

# Load the cascade
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# go to current folder
path = "/home/eve/Desktop/boogaloos"
dirs = os.listdir(path)

# find files in this folder ending with .png
for filename in dirs:
	if (filename.endswith(".png")):
		# Read the input image
		img = cv2.imread(filename)

		# Convert into grayscale
		gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

		# Detect faces
		faces = face_cascade.detectMultiScale(gray, 1.1, 4)

		# crop faces
		for (x, y, w, h) in faces:
    			faces = img[y:y + h, x:x + w]
    			# modifying name to cropped
    			size = len(filename)
    			croppedname = filename[:size - 4] + "_c.jpg"
    			cv2.imwrite(croppedname, faces)
