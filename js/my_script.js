// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий,
// в каком квадранте в декартовой системе координат находится данная точка.
// Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.

document.write("1. Создать объект Point:");
document.write("<br/><br/>");

var point = {
    x: 10,    
    y: 20,
    GetQuadrant: function () {
        if (this.x >= 0 && this.y >= 0){
            return "Данная точка находится в I квадранте";
        }
        else if (this.x <= 0 && this.y >= 0){
            return "Данная точка находится во II квадранте";
        }
        else if (this.x <= 0 && this.y <= 0){
            return "Данная точка находится в III квадранте";
        }
        else if (this.x >= 0 && this.y <= 0){
            return "Данная точка находится в IV квадранте";
        }
        else if (this.x = 0 && this.y != 0){
            return "Данная точка лежит на оси X";
        }
        else if (this.x != 0 && this.y == 0){
            return "Данная точка лежит на оси Y";
        }
        else if (this.x == 0 && this.y == 0){
            return "Данная точка лежит в начале координат";
        }
    }
}

do {point.x = +prompt ("1.1. Введите 'х' координату точки:");
point.y = +prompt ("1.2. Введите 'y' координату точки:");

document.write("Координаты точки:" +"<br/>x = " +point.x +"<br/>y = " +point.y);
document.write("<br/>" +point.GetQuadrant() +"<br/><br/>");
alert("1.3. " +point.GetQuadrant());
var repeat = confirm("1.4. Хотите повторить еще раз?");}
while (repeat);
document.write("<br/>");

// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
//        Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
//        В зависимости от принятого знака операции, вызвать соответствующий метод.
document.write("2. Создать объект Calculator:");
document.write("<br/><br/>");

var calculator = {
    operand1: 10,    
    operand2: 20,
    sign: "+",
    add: function () {
        return this.operand1 + this.operand2;
    },
    sub: function () {
        return this.operand1 - this.operand2;
    },
    mul: function () {
        return this.operand1 * this.operand2;
    },
    div: function () {
        return this.operand1 / this.operand2;
    }
}

var result;
do {
calculator.operand1 = +prompt("2.1.Введите первое число: ");
calculator.operand2 = +prompt("2.2.Введите второе число: ");
calculator.sign = prompt("2.3.Введите знак арифметической операции: + - * /");
switch (calculator.sign) {
    case "+":
        result = calculator.add();
        break;
    case "-":
        result = calculator.sub();
        break;
    case "*":
        result = calculator.mul();
        break;
    case "/":
        result = calculator.div();
        break;
    default:
        document.write("Не является знаком арифметической операции.");
}
document.write("Условие: " + calculator.operand1 +calculator.sign + calculator.operand2);
document.write("<br/>");
document.write("Результат операции: " + result);
document.write("<br/><br/>");
alert("2.4. Результат: " + result);
var repeat = confirm("2.5. Хотите повторить еще раз?");}
while (repeat);

// document.write("Условие: " + calculator.operand1 +calculator.sign + calculator.operand2);
// document.write("<br/><br />");
// document.write("Результат операции: " + result);
document.write("<br/>");

// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
//        содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
//        Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.
document.write("3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия:");
document.write("<br/><br/>");

var human = new Array();
var count = +prompt ("3.1. Колличество сотрудников которых Вы хотите добавить:");
for (var i = 0; i < count; i++){
    human[i] = "worker"+i;
}
function addWorker () {
    for (var i = 0; i < count; i++){
        human[i] = {
            name: "First Name",
            sName: "Second Name",
            age: "Age",
            occupation: "Occupation",
            show: function () {
                document.write("Сотрудник №" +(i+1)+"<br/>");
                document.write("First name: " + this.name +"<br/>");
                document.write("Second name: " + this.sName +"<br/>");
                document.write("Age: " + this.age + "<br/>");
                document.write("Occupation: " + this.occupation +"<br/><br/>");
            }
        }           
        human[i].name = prompt ("3.2. Введите фамилию " +(i+1) +"-го сотрудника:", "Kurolesov");
        human[i].sName = prompt ("3.3. Введите имя " +(i+1) +"-го сотрудника:","Vasiliy");
        human[i].age = +prompt ("3.4. Введите возраст " +(i+1) +"-го  сотрудника:","32");
        human[i].occupation = prompt ("3.5. Введите должность " +(i+1) +"-го сотрудника:","director");
        human[i].show ();
    }  
}
addWorker ();

// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 3000;
//            • "manager" — 1500;
//            • "programmer" — 2000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.
document.write("4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников:");
document.write("<br/><br/>");

var n = human.length;
function addSalary () {
    for (var i = 0; i < n; i++){   
        human[i].show = function () {
            document.write("Сотрудник №" +(i+1)+"<br/>");
            document.write("First name: " + this.name +"<br/>");
            document.write("Second name: " + this.sName +"<br/>");
            document.write("Age: " + this.age + "<br/>");
            document.write("Occupation: " + this.occupation +"<br/>");
            document.write("Salary: " + this.salary +"<br/><br/>");
        }   
        switch (human[i].occupation) {
            case "director":
                human[i].salary = 3000;
                break;
            case "manager":
                human[i].salary = 1500;
                break
            case "programmer":
                human[i].salary = 2000;
                break
            default:
                human[i].salary = 1000;
        }
        human[i].show ();
    }  
}
addSalary ();

// 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
//        Параметр для сортировки принимается от пользователя.
//        После выполнения функции — вывести информацию о сотрудниках.
document.write("5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств:");
document.write("<br/><br/>");

var filtr = ["name","sName","age","occupation","salary"];
var x =  +prompt("5.1. Введите по какому критерию сортировать сотрудников:\n\n1.Name\n2.sName\n3.Age\n4.Occupation\n5.Salary\n\nВведите число от 1 до 5",1);
switch (x) {
    case 1:
        x = filtr[0];
        break;
    case 2:
        x = filtr[1];
        break
    case 3:
        x = filtr[2];
        break
    case 4:
        x = filtr[3];
        break
    case 5:
        x = filtr[4];
        break
    default:
        alert("Введено не верное значение. Пожалуйста введите числа от 1 до 5.")
}

function compareNumeric(a,b) {
    if (a[x] < b[x])
      return -1;
    if (a[x] > b[x])
      return 1;
    return 0;
  }

human.sort(compareNumeric);

// Переписал функцию т.к. не срабатывает порядковый номер сотрудника
var i = 0;
for (var i = 0; i < n; i++){   
    human[i].show = function () {
        document.write("Сотрудник №" +(i+1)+"<br/>");
        document.write("First name: " + this.name +"<br/>");
        document.write("Second name: " + this.sName +"<br/>");
        document.write("Age: " + this.age + "<br/>");
        document.write("Occupation: " + this.occupation +"<br/>");
        document.write("Salary: " + this.salary +"<br/><br/>");
    } 
    human[i].show ();
}
