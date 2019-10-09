<template>
  <f7-page>
    <!-- Menu superior -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Pagina de Inicio</f7-nav-title>
      <f7-nav-right>
        <f7-link class="panel-open" open-panel="right" icon="fas fa-user"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <!-- Body -->
    <f7-block-title>Primer titulo</f7-block-title>
    <f7-block inner>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, ad!</p>
    </f7-block>
    <f7-list>
      <f7-list-item>
        <f7-link href='/' color="red">salir</f7-link>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  components: {}
};
</script>
