// Banco de questões: id, nível, enunciado, 5 alternativas (A–E) e índice da resposta correta (0=A ... 4=E)
const NIVEIS = {1:'Fundamentos',2:'Frações, decimais e porcentagem',3:'Aritmética',4:'Álgebra e equações',5:'Geometria',6:'Funções, PA, PG e logaritmos',7:'Trigonometria, probabilidade e desafios'};
const QUESTOES = [
 {
  "id": 1,
  "level": 1,
  "text": "Quanto é 15 + 27?",
  "options": [
   "32",
   "42",
   "45",
   "52",
   "38"
  ],
  "answer": 1
 },
 {
  "id": 2,
  "level": 1,
  "text": "Quanto é 83 − 46?",
  "options": [
   "47",
   "39",
   "37",
   "43",
   "35"
  ],
  "answer": 2
 },
 {
  "id": 3,
  "level": 1,
  "text": "Quanto é 9 × 8?",
  "options": [
   "64",
   "81",
   "74",
   "72",
   "68"
  ],
  "answer": 3
 },
 {
  "id": 4,
  "level": 1,
  "text": "Quanto é 144 ÷ 12?",
  "options": [
   "10",
   "11",
   "12",
   "14",
   "16"
  ],
  "answer": 2
 },
 {
  "id": 5,
  "level": 1,
  "text": "Qual é o dobro de 37?",
  "options": [
   "64",
   "74",
   "72",
   "84",
   "77"
  ],
  "answer": 1
 },
 {
  "id": 6,
  "level": 1,
  "text": "Quanto é 125 + 275?",
  "options": [
   "350",
   "375",
   "390",
   "400",
   "425"
  ],
  "answer": 3
 },
 {
  "id": 7,
  "level": 1,
  "text": "Quanto é 7 × 13?",
  "options": [
   "81",
   "84",
   "91",
   "97",
   "87"
  ],
  "answer": 2
 },
 {
  "id": 8,
  "level": 1,
  "text": "Qual é a metade de 186?",
  "options": [
   "83",
   "91",
   "93",
   "96",
   "103"
  ],
  "answer": 2
 },
 {
  "id": 9,
  "level": 1,
  "text": "Quanto é 240 ÷ 8?",
  "options": [
   "20",
   "25",
   "28",
   "30",
   "32"
  ],
  "answer": 3
 },
 {
  "id": 10,
  "level": 1,
  "text": "Uma pessoa possui R$ 100 e gasta R$ 37. Quanto sobra?",
  "options": [
   "R$ 53",
   "R$ 63",
   "R$ 67",
   "R$ 73",
   "R$ 57"
  ],
  "answer": 1
 },
 {
  "id": 11,
  "level": 1,
  "text": "Quanto é 18 × 5 − 20?",
  "options": [
   "60",
   "65",
   "70",
   "75",
   "80"
  ],
  "answer": 2
 },
 {
  "id": 12,
  "level": 1,
  "text": "Qual é o resultado de 200 ÷ 5 + 15?",
  "options": [
   "45",
   "50",
   "55",
   "60",
   "65"
  ],
  "answer": 2
 },
 {
  "id": 13,
  "level": 2,
  "text": "Qual fração representa a metade de um inteiro?",
  "options": [
   "1/3",
   "1/4",
   "2/3",
   "1/2",
   "3/4"
  ],
  "answer": 3
 },
 {
  "id": 14,
  "level": 2,
  "text": "Quanto é 1/4 de 100?",
  "options": [
   "20",
   "25",
   "30",
   "40",
   "50"
  ],
  "answer": 1
 },
 {
  "id": 15,
  "level": 2,
  "text": "Qual é o resultado de 0,5 + 0,75?",
  "options": [
   "1,00",
   "1,15",
   "1,20",
   "1,25",
   "1,50"
  ],
  "answer": 3
 },
 {
  "id": 16,
  "level": 2,
  "text": "Quanto é 20% de 150?",
  "options": [
   "20",
   "25",
   "30",
   "35",
   "40"
  ],
  "answer": 2
 },
 {
  "id": 17,
  "level": 2,
  "text": "Qual é a fração equivalente a 2/4?",
  "options": [
   "1/2",
   "1/3",
   "2/3",
   "3/4",
   "4/5"
  ],
  "answer": 0
 },
 {
  "id": 18,
  "level": 2,
  "text": "Quanto é 3/5 de 50?",
  "options": [
   "20",
   "25",
   "30",
   "35",
   "40"
  ],
  "answer": 2
 },
 {
  "id": 19,
  "level": 2,
  "text": "Um produto custa R$ 80 e recebe um desconto de 25%. Qual será o preço final?",
  "options": [
   "R$ 50",
   "R$ 55",
   "R$ 60",
   "R$ 65",
   "R$ 70"
  ],
  "answer": 2
 },
 {
  "id": 20,
  "level": 2,
  "text": "Quanto é 2,5 × 4?",
  "options": [
   "8",
   "9",
   "10",
   "12",
   "15"
  ],
  "answer": 2
 },
 {
  "id": 21,
  "level": 2,
  "text": "Qual é o resultado de 7/8 − 3/8?",
  "options": [
   "1/8",
   "2/8",
   "3/8",
   "4/8",
   "5/8"
  ],
  "answer": 3
 },
 {
  "id": 22,
  "level": 2,
  "text": "Uma turma possui 40 alunos. Se 60% são meninas, quantas meninas existem?",
  "options": [
   "20",
   "22",
   "24",
   "26",
   "28"
  ],
  "answer": 2
 },
 {
  "id": 23,
  "level": 2,
  "text": "Quanto é 1,2 ÷ 0,3?",
  "options": [
   "2",
   "3",
   "4",
   "5",
   "6"
  ],
  "answer": 2
 },
 {
  "id": 24,
  "level": 2,
  "text": "Um salário de R$ 1.500 recebeu um aumento de 10%. Qual é o novo salário?",
  "options": [
   "R$ 1.550",
   "R$ 1.600",
   "R$ 1.650",
   "R$ 1.700",
   "R$ 1.750"
  ],
  "answer": 2
 },
 {
  "id": 25,
  "level": 3,
  "text": "Quanto é 2⁵?",
  "options": [
   "16",
   "24",
   "32",
   "36",
   "64"
  ],
  "answer": 2
 },
 {
  "id": 26,
  "level": 3,
  "text": "Qual é a raiz quadrada de 169?",
  "options": [
   "11",
   "12",
   "13",
   "14",
   "15"
  ],
  "answer": 2
 },
 {
  "id": 27,
  "level": 3,
  "text": "Quanto é 3² + 4²?",
  "options": [
   "12",
   "18",
   "20",
   "25",
   "30"
  ],
  "answer": 3
 },
 {
  "id": 28,
  "level": 3,
  "text": "Qual é o resultado de 5 × (8 + 2)?",
  "options": [
   "40",
   "45",
   "50",
   "55",
   "60"
  ],
  "answer": 2
 },
 {
  "id": 29,
  "level": 3,
  "text": "Quanto é 100 − 4 × 15?",
  "options": [
   "20",
   "30",
   "40",
   "50",
   "60"
  ],
  "answer": 2
 },
 {
  "id": 30,
  "level": 3,
  "text": "Qual é o mínimo múltiplo comum (MMC) entre 6 e 8?",
  "options": [
   "12",
   "18",
   "24",
   "36",
   "48"
  ],
  "answer": 2
 },
 {
  "id": 31,
  "level": 3,
  "text": "Qual é o máximo divisor comum (MDC) entre 36 e 48?",
  "options": [
   "6",
   "8",
   "10",
   "12",
   "16"
  ],
  "answer": 3
 },
 {
  "id": 32,
  "level": 3,
  "text": "Quanto é 2³ × 3²?",
  "options": [
   "36",
   "48",
   "64",
   "72",
   "81"
  ],
  "answer": 3
 },
 {
  "id": 33,
  "level": 3,
  "text": "Qual é o resultado de √144 + √81?",
  "options": [
   "18",
   "19",
   "20",
   "21",
   "22"
  ],
  "answer": 3
 },
 {
  "id": 34,
  "level": 3,
  "text": "Quanto é 5² − 2³ + 3²?",
  "options": [
   "24",
   "25",
   "26",
   "27",
   "28"
  ],
  "answer": 2
 },
 {
  "id": 35,
  "level": 4,
  "text": "Se x + 8 = 20, qual é o valor de x?",
  "options": [
   "10",
   "11",
   "12",
   "13",
   "14"
  ],
  "answer": 2
 },
 {
  "id": 36,
  "level": 4,
  "text": "Resolva: 3x = 27.",
  "options": [
   "6",
   "7",
   "8",
   "9",
   "10"
  ],
  "answer": 3
 },
 {
  "id": 37,
  "level": 4,
  "text": "Se 2x + 5 = 17, quanto vale x?",
  "options": [
   "4",
   "5",
   "6",
   "7",
   "8"
  ],
  "answer": 2
 },
 {
  "id": 38,
  "level": 4,
  "text": "Simplifique: 4x + 3x − 2x.",
  "options": [
   "3x",
   "4x",
   "5x",
   "6x",
   "9x"
  ],
  "answer": 2
 },
 {
  "id": 39,
  "level": 4,
  "text": "Qual é o resultado de (x + 3)(x + 2)?",
  "options": [
   "x² + 5x + 6",
   "x² + 6x + 5",
   "x² + 5",
   "x² + 6",
   "x² + 3x + 2"
  ],
  "answer": 0
 },
 {
  "id": 40,
  "level": 4,
  "text": "Resolva: 5x − 10 = 30.",
  "options": [
   "6",
   "7",
   "8",
   "9",
   "10"
  ],
  "answer": 2
 },
 {
  "id": 41,
  "level": 4,
  "text": "Se x² = 49, quais são os valores possíveis de x?",
  "options": [
   "Apenas 7",
   "Apenas −7",
   "7 e −7",
   "14 e −14",
   "49 e −49"
  ],
  "answer": 2
 },
 {
  "id": 42,
  "level": 4,
  "text": "Resolva a equação: 2(x + 4) = 18.",
  "options": [
   "3",
   "4",
   "5",
   "6",
   "7"
  ],
  "answer": 2
 },
 {
  "id": 43,
  "level": 4,
  "text": "Qual é o valor de x na equação 3x + 2 = 2x + 9?",
  "options": [
   "5",
   "6",
   "7",
   "8",
   "9"
  ],
  "answer": 2
 },
 {
  "id": 44,
  "level": 4,
  "text": "Qual é o resultado da expressão x² + 2x quando x = 4?",
  "options": [
   "16",
   "20",
   "24",
   "28",
   "32"
  ],
  "answer": 2
 },
 {
  "id": 45,
  "level": 4,
  "text": "Resolva: 4x − 3 = 2x + 11.",
  "options": [
   "5",
   "6",
   "7",
   "8",
   "9"
  ],
  "answer": 3
 },
 {
  "id": 46,
  "level": 4,
  "text": "Qual é a solução da equação x² − 5x + 6 = 0?",
  "options": [
   "1 e 6",
   "2 e 3",
   "−2 e −3",
   "3 e 5",
   "1 e 5"
  ],
  "answer": 1
 },
 {
  "id": 47,
  "level": 5,
  "text": "Quantos graus possui a soma dos ângulos internos de um triângulo?",
  "options": [
   "90°",
   "120°",
   "180°",
   "270°",
   "360°"
  ],
  "answer": 2
 },
 {
  "id": 48,
  "level": 5,
  "text": "Qual é a área de um quadrado com lado de 6 cm?",
  "options": [
   "12 cm²",
   "24 cm²",
   "30 cm²",
   "36 cm²",
   "42 cm²"
  ],
  "answer": 3
 },
 {
  "id": 49,
  "level": 5,
  "text": "Qual é o perímetro de um retângulo de 8 cm de comprimento e 5 cm de largura?",
  "options": [
   "13 cm",
   "20 cm",
   "24 cm",
   "26 cm",
   "40 cm"
  ],
  "answer": 3
 },
 {
  "id": 50,
  "level": 5,
  "text": "Qual é a área de um triângulo com base de 10 cm e altura de 6 cm?",
  "options": [
   "20 cm²",
   "25 cm²",
   "30 cm²",
   "35 cm²",
   "60 cm²"
  ],
  "answer": 2
 },
 {
  "id": 51,
  "level": 5,
  "text": "Qual é o volume de um cubo com aresta de 3 cm?",
  "options": [
   "9 cm³",
   "18 cm³",
   "21 cm³",
   "27 cm³",
   "36 cm³"
  ],
  "answer": 3
 },
 {
  "id": 52,
  "level": 5,
  "text": "Qual é a área de um círculo com raio de 2 cm? Considere π = 3,14.",
  "options": [
   "6,28 cm²",
   "9,42 cm²",
   "12,56 cm²",
   "15,70 cm²",
   "18,84 cm²"
  ],
  "answer": 2
 },
 {
  "id": 53,
  "level": 5,
  "text": "Um triângulo possui ângulos de 50° e 60°. Qual é o terceiro ângulo?",
  "options": [
   "60°",
   "65°",
   "70°",
   "75°",
   "80°"
  ],
  "answer": 2
 },
 {
  "id": 54,
  "level": 5,
  "text": "Qual é a diagonal de um quadrado de lado 5 cm?",
  "options": [
   "5√2 cm",
   "5√3 cm",
   "10 cm",
   "10√2 cm",
   "25 cm"
  ],
  "answer": 0
 },
 {
  "id": 55,
  "level": 5,
  "text": "Qual é o volume de um paralelepípedo de dimensões 4 cm, 3 cm e 5 cm?",
  "options": [
   "40 cm³",
   "50 cm³",
   "60 cm³",
   "70 cm³",
   "80 cm³"
  ],
  "answer": 2
 },
 {
  "id": 56,
  "level": 5,
  "text": "Qual é o comprimento de uma circunferência de raio 5 cm? Considere π = 3,14.",
  "options": [
   "15,7 cm",
   "25,7 cm",
   "31,4 cm",
   "35,4 cm",
   "50 cm"
  ],
  "answer": 2
 },
 {
  "id": 57,
  "level": 5,
  "text": "Um triângulo retângulo possui catetos de 6 cm e 8 cm. Qual é a hipotenusa?",
  "options": [
   "9 cm",
   "10 cm",
   "11 cm",
   "12 cm",
   "14 cm"
  ],
  "answer": 1
 },
 {
  "id": 58,
  "level": 5,
  "text": "Qual é a área de um trapézio com bases de 8 cm e 12 cm e altura de 5 cm?",
  "options": [
   "40 cm²",
   "45 cm²",
   "50 cm²",
   "55 cm²",
   "60 cm²"
  ],
  "answer": 2
 },
 {
  "id": 59,
  "level": 6,
  "text": "Se f(x) = 2x + 3, quanto vale f(4)?",
  "options": [
   "9",
   "10",
   "11",
   "12",
   "13"
  ],
  "answer": 2
 },
 {
  "id": 60,
  "level": 6,
  "text": "Qual é a raiz da função f(x) = 3x − 12?",
  "options": [
   "2",
   "3",
   "4",
   "5",
   "6"
  ],
  "answer": 2
 },
 {
  "id": 61,
  "level": 6,
  "text": "Qual é o coeficiente angular da função y = 5x + 2?",
  "options": [
   "2",
   "3",
   "4",
   "5",
   "7"
  ],
  "answer": 3
 },
 {
  "id": 62,
  "level": 6,
  "text": "Resolva o sistema:\n{ x + y = 10\n{ x − y = 2\n\nQual é o valor de x?",
  "options": [
   "4",
   "5",
   "6",
   "7",
   "8"
  ],
  "answer": 2
 },
 {
  "id": 63,
  "level": 6,
  "text": "Uma mercadoria custa R$ 200 e sofre dois aumentos consecutivos de 10%. Qual será o preço final?",
  "options": [
   "R$ 220",
   "R$ 240",
   "R$ 242",
   "R$ 250",
   "R$ 260"
  ],
  "answer": 2
 },
 {
  "id": 64,
  "level": 6,
  "text": "Qual é o valor de 2⁻²?",
  "options": [
   "−4",
   "−1/4",
   "1/2",
   "1/4",
   "4"
  ],
  "answer": 3
 },
 {
  "id": 65,
  "level": 6,
  "text": "Qual é o valor de log₂ 32?",
  "options": [
   "3",
   "4",
   "5",
   "6",
   "8"
  ],
  "answer": 2
 },
 {
  "id": 66,
  "level": 6,
  "text": "Em uma progressão aritmética (PA), o primeiro termo é 3 e a razão é 4. Qual é o décimo termo?",
  "options": [
   "35",
   "37",
   "39",
   "41",
   "43"
  ],
  "answer": 3
 },
 {
  "id": 67,
  "level": 6,
  "text": "Qual é a soma dos cinco primeiros termos da PA: 2, 5, 8, 11, 14?",
  "options": [
   "35",
   "38",
   "40",
   "42",
   "45"
  ],
  "answer": 3
 },
 {
  "id": 68,
  "level": 6,
  "text": "Qual é o próximo termo da progressão geométrica: 2, 6, 18, 54...?",
  "options": [
   "108",
   "126",
   "144",
   "162",
   "180"
  ],
  "answer": 3
 },
 {
  "id": 69,
  "level": 6,
  "text": "Qual é o domínio da função f(x) = 1/(x − 3), considerando os números reais?",
  "options": [
   "Todos os reais, exceto 0",
   "Todos os reais, exceto 1",
   "Todos os reais, exceto 3",
   "Apenas números positivos",
   "Apenas números negativos"
  ],
  "answer": 2
 },
 {
  "id": 70,
  "level": 6,
  "text": "Qual é o valor de x na equação 2ˣ = 64?",
  "options": [
   "4",
   "5",
   "6",
   "7",
   "8"
  ],
  "answer": 2
 },
 {
  "id": 71,
  "level": 7,
  "text": "Em um triângulo retângulo, o seno de um ângulo é a razão entre:",
  "options": [
   "Cateto adjacente e hipotenusa",
   "Cateto oposto e hipotenusa",
   "Cateto oposto e cateto adjacente",
   "Hipotenusa e cateto adjacente",
   "Os dois catetos somados"
  ],
  "answer": 1
 },
 {
  "id": 72,
  "level": 7,
  "text": "Quanto vale sen 30°?",
  "options": [
   "0",
   "1/4",
   "1/2",
   "√2/2",
   "1"
  ],
  "answer": 2
 },
 {
  "id": 73,
  "level": 7,
  "text": "Quanto vale cos 60°?",
  "options": [
   "0",
   "1/4",
   "1/2",
   "√3/2",
   "1"
  ],
  "answer": 2
 },
 {
  "id": 74,
  "level": 7,
  "text": "Qual é o resultado de tan 45°?",
  "options": [
   "0",
   "1/2",
   "1",
   "√2",
   "√3"
  ],
  "answer": 2
 },
 {
  "id": 75,
  "level": 7,
  "text": "Ao lançar um dado comum de seis faces, qual é a probabilidade de sair um número par?",
  "options": [
   "1/6",
   "1/3",
   "1/2",
   "2/3",
   "5/6"
  ],
  "answer": 2
 },
 {
  "id": 76,
  "level": 7,
  "text": "Uma urna possui 4 bolas vermelhas, 3 azuis e 3 verdes. Qual é a probabilidade de retirar uma bola azul?",
  "options": [
   "10%",
   "20%",
   "30%",
   "40%",
   "50%"
  ],
  "answer": 2
 },
 {
  "id": 77,
  "level": 7,
  "text": "Qual é a média aritmética dos números 8, 10, 12, 14 e 16?",
  "options": [
   "10",
   "11",
   "12",
   "13",
   "14"
  ],
  "answer": 2
 },
 {
  "id": 78,
  "level": 7,
  "text": "Qual é o determinante da matriz abaixo?\n| 3  2 |\n| 4  5 |",
  "options": [
   "5",
   "7",
   "9",
   "11",
   "15"
  ],
  "answer": 1
 },
 {
  "id": 79,
  "level": 7,
  "text": "Qual é a derivada da função f(x) = 3x² + 2x − 5?",
  "options": [
   "3x + 2",
   "6x + 2",
   "6x − 5",
   "3x² + 2",
   "6x² + 2x"
  ],
  "answer": 1
 },
 {
  "id": 80,
  "level": 7,
  "text": "Qual é o resultado da integral definida abaixo?\n∫₀² 3x² dx",
  "options": [
   "4",
   "6",
   "8",
   "10",
   "12"
  ],
  "answer": 2
 },
 {
  "id": 81,
  "level": 7,
  "text": "Resolva a equação exponencial 3ˣ⁺¹ = 81.",
  "options": [
   "2",
   "3",
   "4",
   "5",
   "6"
  ],
  "answer": 2
 },
 {
  "id": 82,
  "level": 7,
  "text": "Uma função quadrática é definida por f(x) = x² − 6x + 5. Qual é o valor mínimo dessa função?",
  "options": [
   "−5",
   "−4",
   "−3",
   "−2",
   "−1"
  ],
  "answer": 1
 }
];
