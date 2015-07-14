var aux, x, y;

var cont1 = 0;

var fondo;

var contexto;

var nombre, nom;

var m1, m2, m3, m4, m5, m6;
var muerte = [m1,m2,m3,m4,m5,m6];

var militar = 
{
	posX: 20,
	posY: 490
};

var boss =
{
	pX: 440,
	pY: 100
};

function inicio()
{
	x = document.getElementById("x");
	y = document.getElementById("y");
	nom = document.getElementById("cajaNombre");
	var canvas = document.getElementById("can");
	canvas.width = 570;
	canvas.height = 600;
	contexto = canvas.getContext("2d");

	nombre = nom.value;

	cargaImagenes();

	document.addEventListener("keydown", dibujar);
	
}

function cargaImagenes()
{
	fondo = new Image();
	fondo.src = "escenario.png";
	fondo.onload = dibujar;

	boss.imagen = new Image();
	boss.imagen.src = "boss.png";
	boss.imagen.onload = dibujar;
//---------------------------------------
	militar.abajo = new Image();
	militar.abajo.src = "frente1.png";
	militar.abajo.onload = dibujar;

	militar.abajo1 = new Image();
	militar.abajo1.src = "frente2.png";
	militar.abajo1.onload = dibujar;
//---------------------------------------
	militar.izq = new Image();
	militar.izq.src = "izq1.png";
	militar.izq.onload = dibujar;

	militar.izq1 = new Image();
	militar.izq1.src = "izq2.png";
	militar.izq1.onload = dibujar;
//---------------------------------------
	militar.der = new Image();
	militar.der.src = "der1.png";
	militar.der.onload = dibujar;

	militar.der1 = new Image();
	militar.der1.src = "der2.png";
	militar.der1.onload = dibujar;
//---------------------------------------
	militar.arriba = new Image();
	militar.arriba.src = "arriba1.png";
	militar.arriba.onload = dibujar;

	militar.arriba1 = new Image();
	militar.arriba1.src = "arriba2.png";
	militar.arriba1.onload = dibujar;


	//dibujar();

}

function dibujar(dato)
{
	var codigo = dato.keyCode;
	var band = true;
	
	contexto.drawImage(fondo, 0, 0);
	contexto.drawImage(boss.imagen, boss.pX, boss.pY);
	
	if(codigo == undefined)
	{
		contexto.drawImage(militar.abajo, militar.posX, militar.posY);
		aux = militar.abajo;
	}	

	if(codigo == 38)//up
	{
		limitesUp();
		enfrentamiento();
	}
	else if(codigo == 40)//down
	{
		limitesDown();
		enfrentamiento();
	}
	else if(codigo == 37)//left
	{
		limitesLeft();
		enfrentamiento();
	}
	else if(codigo == 39)//right
	{
		limitesRight();
		enfrentamiento();
	}
	else if(codigo != undefined && codigo > 7)
	{
		alert("Esa tecla no esta definida");
		contexto.drawImage(aux, militar.posX, militar.posY);
	}

	x.innerText = "Posición en X: " + militar.posX;
	y.innerText = "Posición en Y: " + militar.posY;

}

function enfrentamiento()
{
	if(militar.posX == 410 && (militar.posY <= 200 && militar.posY >= 80))
	{
		alert("Enfrentamiento\nHola " + nombre + " tienes dos oportunidades");
		retos();
	}
	else if(militar.posY == 200 && (militar.posX >= 410 && militar.posX <= 520))
	{
		alert("enfrentamiento\nHola " + nombre + " tienes dos oportunidades");
		retos();
	}
}

function numeroAleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo +1 ) + minimo);
	return numero;
}

function retos()
{
	var vida = 2;
	var n1 = numeroAleatorio(50, 100);
	var n2 = numeroAleatorio(25, 40);
	var suma = prompt("cual es el resultado de: \n" + n1 + "+" + n2);

	if(suma == (n1+n2))
	{
		alert("Respuesta correcta, le diste un golpe al mounstro ;)");
	}
	else
	{
		alert("Respuesta incorrecta, el mounstro te dio un &%$#$% \n Te queda una vida");
		vida--;
	}

	n1 = numeroAleatorio(50, 100);
	n2 = numeroAleatorio(5, 10);
	var suma = prompt("cual es el resultado de: \n" + n1 + "-" + n2);
	if(suma == (n1-n2))
	{
		alert("Respuesta correcta\n Ganaste " + nombre);
		location.reload();
	}
	else
	{
		alert("Respuesta incorrecta, el mounstro te dio un &%$#$% \n Estas muerto " + nombre);
		vida--;
		location.reload();
	}

	

}

function tuMuerte()
{
	

	m1 = new Image();
	m1.src
}

function limitesRight()
{

	if(cont1 == 0)
	{

		if(militar.posY >= 470 && militar.posY <= 520)
		{
			if(militar.posX >= 20 && militar.posX < 510)
			{
				militar.posX += 10;
			}
		}

		if(militar.posY > 340 && militar.posY <= 460)
		{
			if(militar.posX >= 340 && militar.posX <= 510)
			{
				militar.posX += 10;
			}
		}

		
		if(militar.posY >= 340 && militar.posY <= 360)
		{
			if(militar.posX >= 20 && militar.posX <= 330)
			{
				militar.posX += 10;
			}
		}

		if(militar.posY >= 220 && militar.posY <= 330)
		{
			if(militar.posX >= 20 && militar.posX <= 200)
			{
				militar.posX += 10;
			}

		}

		if(militar.posY >= 220 && militar.posY <= 230)
		{
			if(militar.posX >= 210 && militar.posX <= 510 )
			{
				militar.posX += 10;
			}
		}

		if(militar.posY >= 80 && militar.posY <= 220)
		{
			if(militar.posX >= 340 && militar.posX <= 510)
			{
				militar.posX += 10;
			}
		}

		if(militar.posY >= 8 && militar.posY <=110)
		{
			if(militar.posX >= 20 && militar.posX <= 330)
			{
				militar.posX += 10;
			}
		}

		//***********militar.posX += 10;
		contexto.drawImage(militar.der, militar.posX, militar.posY);
		aux = militar.der;
		cont1 = 1;
	}
	else if(cont1 == 1)
	{
		if(militar.posY >= 470 && militar.posY <= 520)
		{
			if(militar.posX >= 20 && militar.posX < 510)
			{
				militar.posX += 10;
			}
		}

		if(militar.posY > 340 && militar.posY <= 460)
		{
			if(militar.posX >= 340 && militar.posX <= 510)
			{
				militar.posX += 10;
			}
		}

		if(militar.posY >= 340 && militar.posY <= 360)
		{
			if(militar.posX >= 20 && militar.posX <= 330)
			{
				militar.posX += 10;
			}
		}

		if(militar.posY >= 220 && militar.posY <= 330)
		{
			if(militar.posX >= 20 && militar.posX <= 200)
			{
				militar.posX += 10;
			}

		}
		if(militar.posY >= 220 && militar.posY <= 230)
		{
			if(militar.posX >= 210 && militar.posX <= 510 )
			{
				militar.posX += 10;
			}
		}

		if(militar.posY >= 80 && militar.posY < 220)
		{
			if(militar.posX >= 340 && militar.posX <= 510)
			{
				militar.posX += 10;
			}
		}

		if(militar.posY >= 8 && militar.posY <=110)
		{
			if(militar.posX >= 20 && militar.posX <= 330)
			{
				militar.posX += 10;
			}
		}

		//***************militar.posX += 10;
		contexto.drawImage(militar.der1, militar.posX, militar.posY);
		aux = militar.der1;
		cont1 = 0;
	}
}

function limitesLeft()
{
	if(cont1 == 0)
		{
			if(militar.posY >= 470 && militar.posY <= 520)
			{
				if(militar.posX > 20 && militar.posX <= 520)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY >= 340 && militar.posY <= 460)
			{
				if(militar.posX > 340 && militar.posX <= 520)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY >= 340 && militar.posY <= 360)
			{
				if(militar.posX <= 340 && militar.posX > 20)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY <= 340 && militar.posY >= 10)
			{
				if(militar.posX > 20 && militar.posX <= 210)
				{
					militar.posX -= 10;
				}

			}

			if(militar.posY >= 220 && militar.posY <= 230)
			{
				if(militar.posX >= 220 && militar.posX <= 520)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY >= 80 && militar.posY <= 220)
			{
				if(militar.posX > 340 && militar.posX <= 520)
				{
					militar.posX -= 10;
				}
			}
			if(militar.posY >= 80 && militar.posY <= 110)
			{
				if(militar.posX > 20 && militar.posX <= 340)
				{
					militar.posX -= 10;
				}
			}

			//--------militar.posX -= 10;
			contexto.drawImage(militar.izq, militar.posX, militar.posY);
			aux = militar.izq;
			cont1 = 1;
		}
		else if(cont1 == 1)
		{
			if(militar.posY >= 470 && militar.posY <= 520)
			{
				if(militar.posX > 20 && militar.posX <= 520)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY >= 340 && militar.posY <= 460)
			{
				if(militar.posX > 340 && militar.posX <= 520)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY >= 340 && militar.posY <= 360)
			{
				if(militar.posX <= 340 && militar.posX > 20)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY <= 340 && militar.posY >= 10)
			{
				if(militar.posX > 20 && militar.posX <= 210)
				{
					militar.posX -= 10;
				}

			}
			if(militar.posY >= 220 && militar.posY <= 230)
			{
				if(militar.posX >= 220 && militar.posX <= 520)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY >= 80 && militar.posY <= 220)
			{
				if(militar.posX > 340 && militar.posX <= 520)
				{
					militar.posX -= 10;
				}
			}

			if(militar.posY >= 80 && militar.posY <= 110)
			{
				if(militar.posX > 20 && militar.posX <= 340)
				{
					militar.posX -= 10;
				}
			}

			//--------------militar.posX -= 10;
			contexto.drawImage(militar.izq1, militar.posX, militar.posY);
			aux = militar.izq1;
			cont1 = 0;
		}
}

function limitesDown()
{
	if(cont1 == 0)
	{
		if(militar.posX >= 20 && militar.posX <= 520)
		{
			if(militar.posY < 110)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 340 && militar.posX <= 520)
		{
			if(militar.posY >= 100 && militar.posY < 230)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 20 && militar.posX <= 330)
		{
			if(militar.posY >= 220 && militar.posY < 230)
			{
				militar.posY += 10;
			}

		}

		if(militar.posX >= 20 && militar.posX <= 200)
		{
			if(militar.posY >= 230 && militar.posY < 360)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 210 && militar.posX <= 310)
		{
			if(militar.posY >= 340 && militar.posY < 360)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 320 && militar.posX <= 520)
		{
			if(militar.posY >= 340 && militar.posY <= 510)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 20 && militar.posX <= 340)
		{
			if(militar.posY >= 470 && militar.posY <= 510)
			{
				militar.posY += 10;
			}
		}

		//militar.posY += 10;
		contexto.drawImage(militar.abajo, militar.posX, militar.posY);
		aux = militar.abajo;
		cont1 = 1;
	}
	else if(cont1 == 1)
	{
		if(militar.posX >= 20 && militar.posX <= 520)
		{
			if(militar.posY < 110)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 340 && militar.posX <= 520)
		{
			if(militar.posY >= 100 && militar.posY < 230)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 20 && militar.posX <= 330)
		{
			if(militar.posY >= 220 && militar.posY < 230)
			{
				militar.posY += 10;
			}

		}

		if(militar.posX >= 20 && militar.posX <= 200)
		{
			if(militar.posY >= 230 && militar.posY < 360)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 210 && militar.posX <= 310)
		{
			if(militar.posY >= 340 && militar.posY < 360)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 320 && militar.posX <= 520)
		{
			if(militar.posY >= 340 && militar.posY <= 510)
			{
				militar.posY += 10;
			}
		}

		if(militar.posX >= 20 && militar.posX <= 340)
		{
			if(militar.posY >= 470 && militar.posY <= 510)
			{
				militar.posY += 10;
			}
		}

		//militar.posY += 10;
		contexto.drawImage(militar.abajo1, militar.posX, militar.posY);
		aux = militar.abajo1;
		cont1 = 0;
	}
}

function limitesUp()
{
	if(cont1 == 0)
	{
		if(militar.posY >= 470)
		{
			if(militar.posX >= 20 && militar.posX < 520 && militar.posY > 470)
			{
				militar.posY -= 10;
			}
		}
		if(militar.posY > 340 &&  militar.posY <= 470 && militar.posX > 330)
		{
			if(militar.posX > 335 && militar.posX <= 520)
			{
				militar.posY -= 10;
			}
			else if(militar.posX >= 20 && militar.posX <= 330)
			{
				militar.posY -= 10;
			}
		}

		if(militar.posY > 340 &&  militar.posY <= 360)
		{
			if(militar.posX >= 20 && militar.posX < 340)//djgfhjdvfjdsh 340
			{
				militar.posY -= 10;
			}
		}

		if(militar.posY <= 340 && militar.posY > 220 )
		{
			if(militar.posX >= 20 && militar.posX < 215)
			{
				militar.posY -= 10;
			}
		}

		if(militar.posY > 220 && militar.posY <= 230)
		{
			if(militar.posX >= 220 && militar.posX <= 510)
			{
				militar.posY -= 10;
			}
		}

		if(militar.posY <= 220 && militar.posY > 80)
		{
			if(militar.posX >= 340 && militar.posX <= 510)
			{
				militar.posY -= 10;
			}
		}

		if(militar.posY <= 110 && militar.posY > 80)
		{
			if(militar.posX <= 330 && militar.posX >= 20)
			{
				militar.posY -= 10;
			}
		}

		contexto.drawImage(militar.arriba, militar.posX, militar.posY);
		aux = militar.arriba;
		cont1 = 1;
	}
	else if(cont1 == 1)
	{
		if(militar.posY >= 470)
		{
			if(militar.posX >= 20 && militar.posX < 520 && militar.posY > 470)
			{
				militar.posY -= 10;
			}
			else
			{
				band = true;
			}	
		}

		if(militar.posY > 340 &&  militar.posY <= 470 && militar.posX > 330)
		{
			if(militar.posX > 335 && militar.posX <= 520)
			{
				militar.posY -= 10;
			}
			else if(militar.posX >= 20 && militar.posX <= 330)
			{
				militar.posY -= 10;
			}
		}

		if(militar.posY <= 340 && militar.posY > 220 )
		{
			if(militar.posX >= 20 && militar.posX < 215)
			{
				militar.posY -= 10;
			}

		}

		if(militar.posY > 220 && militar.posY <= 230)
		{
			if(militar.posX >= 220 && militar.posX <= 510)
			{
				militar.posY -= 10;
			}
		}

		if(militar.posY <= 220 && militar.posY > 80)
		{
			if(militar.posX >= 340 && militar.posX <= 510)
			{
				militar.posY -= 10;
			}
		}

		if(militar.posY <= 110 && militar.posY > 80)
		{
			if(militar.posX <= 330 && militar.posX >= 20)
			{
				militar.posY -= 10;
			}
		}

		contexto.drawImage(militar.arriba1, militar.posX, militar.posY);
		aux = militar.arriba1;
		cont1 = 0;
	}
}