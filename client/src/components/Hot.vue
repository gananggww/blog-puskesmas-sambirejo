<template>
  <div>
    <div class="ui center aligned dividing header">
      <h1>Coming Event</h1>
    </div>
    <div class="ui cards stackable three grid">
      <div class="card" v-for="all in fucker">
        <div class="content">
          <div class="header">{{all.judul}}</div>
          <div class="description">
            {{all.content}}
          </div>
        </div>
        <div class="extra content">
          Event: {{all.tanggal}}
        </div>
        <div class="ui bottom attached button">
          Read More
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: [{
        judul: 'Gerak Jalan',
        img: 'https://semantic-ui.com/images/wireframe/image.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tanggal: '25-09-2017',
        author: {
          name: 'Arlina P.',
          picture: 'https://semantic-ui.com/images/wireframe/image.png'
        }
      }, {
        judul: 'Sosialisasi Ke SMA',
        img: 'https://semantic-ui.com/images/wireframe/image.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tanggal: '25-09-2017',
        author: {
          name: 'Arlina P.',
          picture: 'https://semantic-ui.com/images/wireframe/image.png'
        }
      }, {
        judul: 'Penyuluhan Narkoba',
        img: 'https://semantic-ui.com/images/wireframe/image.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tanggal: '25-09-2017',
        author: {
          name: 'Arlina P.',
          picture: 'https://semantic-ui.com/images/wireframe/image.png'
        }
      }]
    }
  },
  computed: {
    fucker: function () {
      let body = this.article
      return (body.content.length > 200) ? body.content.substr(0, 200 - 1).trim() + '...' : body
    }
  }
}
</script>

<style lang="css">
</style>
