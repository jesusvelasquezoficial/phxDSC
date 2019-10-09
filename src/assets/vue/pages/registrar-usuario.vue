<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-block class="text-align-center">
      <img src="../../images/logo-cuadrado.png" alt="Logo de phoenix" width="150px">
    </f7-block>
    <f7-login-screen-title>Registro de Usuarios</f7-login-screen-title>
    <f7-list form>
      <f7-list-item-row>
        <f7-list-input
          label="Nombre"
          type="text"
          placeholder="Nombre"
          :value="nombre"
          @input="nombre = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Apellido"
          type="text"
          placeholder="Apellido"
          :value="apellido"
          @input="apellido = $event.target.value"
        ></f7-list-input>
      </f7-list-item-row>
      <f7-list-input
        label="Correo Electronico"
        type="email"
        placeholder="Correo Electronico"
        :value="email"
        @input="email = $event.target.value"
      ></f7-list-input>
      <f7-list-item-row>
        <f7-list-input
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          :value="password"
          @input="password = $event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="Confirmar Contraseña"
          type="password"
          placeholder="Confirmar Contraseña"
          :value="password2"
          @input="password2 = $event.target.value"
        ></f7-list-input>
      </f7-list-item-row>
      <f7-list-item-row>
        <f7-list-item>
          <small>
            <f7-checkbox 
              :value="tyc" 
              @change="tyc = $event.target.value"
            ></f7-checkbox> Acepto los Terminos y Condiciones
          </small>
        </f7-list-item>
      </f7-list-item-row>
      <f7-button @click="signIn" class="margin-horizontal margin-top" raised color="black">Registrarse</f7-button>
    </f7-list>
    <f7-list class="padding-top">
      <f7-list-button @click="$f7router.navigate('/')" class="no-padding">Iniciar Sesión</f7-list-button>
      <f7-block-footer>¿Ya estas registrado?.<br>Inicia sesión con tu cuenta.</f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
  export default {
    data() {
      return {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        password2: '',
        tyc: true,
      };
    },
    methods: {
      signIn() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        app.dialog.alert(`<br>Nombre: ${self.nombre}<br>Apellido: ${self.apellido}<br>Correo electronico: ${self.email}<br>Contraseña: ${self.password}<br>Confirmar Contraseña: ${self.password2}<br>Terminos y Condicones: ${self.tyc}`, () => {
          // router.back();
        });
      },
    },
  };
</script>