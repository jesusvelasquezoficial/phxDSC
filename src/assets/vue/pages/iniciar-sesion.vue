<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    <f7-block class="text-align-center">
      <img src="../../images/logo-cuadrado.png" alt="Logo de phoenix" width="150px">
    </f7-block>
    <f7-login-screen-title>Iniciar Sesión</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="Correo Electronico"
        type="email"
        placeholder="Correo Electronico"
        :value="email"
        @input="email = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
      <f7-button @click="signIn" class="margin-horizontal margin-top" raised color="black">Ingresar</f7-button>
    </f7-list>
    <f7-list class="padding-top">
      <f7-list-button @click="$f7router.navigate('/registrar-usuario/')" class="no-padding">Registrarse</f7-list-button>
      <f7-block-footer>¿Aun no esta registrado?.<br>Registrate para ser parte de nuestra comunidad.</f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      signIn() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        app.dialog.alert(`Correo electronico: ${self.email}<br>Contraseña: ${self.password}`, () => {
          // router.back();
          router.navigate('/inicio/')
        });
      },
    },
  };
</script>