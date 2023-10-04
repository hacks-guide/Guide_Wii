import os


files_in_main = []


for i in os.listdir("_pages/en_US/"):
    files_in_main.append(i)

for i in os.listdir("_pages/"):
    if i == "en_US":
        continue
    for j in os.listdir(f"_pages/{i}"):
        if j not in files_in_main:
            print(f"Deleting _pages/{i}/{j}")
            os.remove(f"_pages/{i}/{j}")
