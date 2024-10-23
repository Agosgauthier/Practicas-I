# Trabajo practico sobre RestAPI
# Gauthier Agostina

### 1. GET

##### Request
GET https://instagram.com/users?id=1

##### Response
[
    {
        "status": 100,
        "users":{
                 "id": 1,
                 "nombre": "juan",
                 "apellido": "perez",
                 "gmail": "juanperez@gmail.com";
                }
     }
]




### 2. PUT

##### Request
PUT https://instagram.com/users?id=1

##### Response 
[
    {
        "status": 101,
        "users": {
                 "id": 1,
                 "nombre": "juan",
                 "apellido": "perez",
                 "gmail": "juanp@gmail.com.ar";
                 }
    }
]




### 3. POST

##### Request
POST https://instagram.com/login

{
    "gmail": "juanp@gmail.com.ar",
    "password": "123456";
}

##### Response
[
    {
        "status": 102,
        "message": "inicio de sesion exitoso",
        "users"{
               "id": 1,
               "nombre": "juan",
               "apellido": "perez",
               "gmail":"juanp@gmail.com.ar";
               }
     }
    "token": "JRVtpswwkLQ1730Fw"
]




### 4. DELETE

##### Request
DELETE https://instagram.com/users?id=1

{
    "gmail": "juanp@gmail.com.ar",
    "password": "123456";
}

##### Response
[
    "status": 103,
    "message": "cuenta eliminada exitosamente";
]