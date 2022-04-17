programa
{
	
	funcao inicio()
	{
		cadeia dados[][] = {{"João", "São Paulo","(11)9999-5241"},{"Maria","Ribeirão Preto","(16)9999-8596"},{"Ana","Manaus","(92)9999-8574"}}
		inteiro contador = 0

		faca{
			escreva("\n----------------------")
			escreva("\nNome: " + dados[contador][0])
			escreva("\nEndereço: " + dados[contador][1])
			escreva("\nTelefone: " + dados[contador][2])
			escreva("\n----------------------")
			contador++
		}enquanto(contador < 3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 459; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */