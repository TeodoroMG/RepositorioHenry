//console.log(4 < 7);
//console.log(4 < 1);
//console.log(4 < 4);
//console.log(4 == 7);

// = ASIGNACION
//== IGUALDAD === TAMBIEN IGUALDAD

3 == 3;
3 === 3;
3 == '3';
3 ==='3';  //  eSTRICTA === VERIFICA EL TIPO DE DATO Y EL VALOR 

// ASOCIATIVIDAD

var a = 1;
var b = 2;
var c = a = b;
// tinen mismo valor de precedencia por tanto 
//aparece el concepto de ASOCIATIVIDAD.
//RESOLUCION de (var = c = a =b); la maquina respondera de 
//la manera siguiente : 
// lA ASIGNACION TIENE ASOCIATIVIDAD A LA DERECHA 
//ES DECIR DE RDERECHA A IZQUIERDA
//     a=b
//     c=a
 console.log(a); //2
 console.log(b); //2
 console.log(c);



 // LA DIVISION TIENE UNA ASOCIATIVIDAD A LA IZQUIERDA 
 // ESTO SE ENCUENTRA EN LA TABLA DE PRECEDENCIA .

 console.log( 16 / 2 / 4 )
 // 16/2 Y LUEGO EL RESULTADO 8
 // 8/4 = 2
