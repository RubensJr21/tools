import os
import re

pasta = '.'
arqOut = open("./links.md", "w", encoding="UTF-8")
countFiles = 1 # usado na linha 16 para enumerar os itens
for diretorio, subpastas, arquivos in os.walk(pasta):
    for arquivo in arquivos:
        if(re.search("\.url$", arquivo) != None): # verifica se o arquivo é do tipo url
            arq = open(os.path.join(diretorio, arquivo), 'r')
            arquivo = arquivo.replace(".url", "") # troca nome de arquivo para usar como titulo
            url = arq.readlines()[1] # pega a segunda linha que contém a url
            url = url.split('URL=')[1] # filtra apenas a parte do texto que contém o link
            url = url.replace("\n", "") # remove a quebra de linha
            # verifica se o link é do youtube e atribui label para quando houver o hover
            msg = "Link do vídeo" if re.search("\.youtube\.com*", url) != None else "Link da página"
            arqOut.write(f"### 3.2.{countFiles} [{arquivo}]({url}, \"{msg}\")\n")
            countFiles+=1
            arq.close()
arqOut.close()
