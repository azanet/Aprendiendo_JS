var usuario = new Array();
usuario["nick"] = "jvix";
usuario["nombreCompleto"] = "Javier Pérez Álvarez";
usuario["email"] = "jvix@jvix.com";
usuario["password"] = "jvix543";
QUnit.test( "Prueba Array", function ( assert ) {
assert.equal(usuario["nick"],"jvix", "Correcto" );
assert.equal(usuario["nombreCompleto"],"Javier Pérez Álvarez",
"Correcto" );
assert.equal(usuario["email"],"jvix@jvix.com", "Correcto" );
assert.equal(usuario["password"],"jvix543", "Correcto" );
assert.equal(usuario.nick,"jvix", "Correcto" );
assert.equal(usuario.nombreCompleto,"Javier Pérez Álvarez",
"Correcto" );
assert.equal(usuario.email,"jvix@jvix.com", "Correcto" );
assert.equal(usuario.password,"jvix543", "Correcto" );
});
