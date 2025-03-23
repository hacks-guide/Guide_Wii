import os


files_in_main = []


for i in os.listdir("docs"):
    if i.endswith(".md"):
        files_in_main.append(i)

for i in os.listdir("docs"):
    if not os.path.isdir(f"docs/{i}"):
        continue
    if i in [".vitepress", "public", "_include"]:
        continue
    for j in os.listdir(f"docs/{i}"):
        if j not in files_in_main:
            print(f"Deleting docs/{i}/{j}")
            os.remove(f"docs/{i}/{j}")
