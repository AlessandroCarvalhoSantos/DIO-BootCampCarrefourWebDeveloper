programa
{
	
	funcao inicio()
	{
		real janeiro,fevereiro,marco,abril,media

		escreva("Digite as vendas de Janeiro: ")
		leia(janeiro)
		escreva("Digite as vendas de Fevereiro: ")
		leia(fevereiro)
		escreva("Digite as vendas de Março: ")
		leia(marco)
		escreva("Digite as vendas de Abril: ")
		leia(abril)

		media = (janeiro+fevereiro+marco+abril)/4
		

		se(media>=5000){
			escreva("Você ganhou um abono de " + 0.10 * media)
		}
		senao{
			escreva("Você ganhou um abono de " + 0.03 * media)
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 426; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */