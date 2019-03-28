<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">FC</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav nav-pills ul-navbar-custom">
                    <li class="nav-item">
                        <router-link v-for="route in $router.options.routes" :to="route" :key="route.path" @click.native="closeToggle()" :exact="true">
                            <span>{{ route.name || route.children[0].name }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
  export default {
    data: function () {
      return {
        activeItem: 'Home'
      }
    },
    computed: {
    },
    watch: {

    },
    created: function (menuItem) {
    },
    mounted: function () {
    },
    methods: {
      closeToggle: function () {
        $('.collapse').collapse('hide')
      }
    }
  }
</script>
