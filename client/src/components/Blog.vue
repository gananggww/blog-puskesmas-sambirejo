<template lang="html">
  <div>
    <div class="ui stackable three column grid">
      <div class="five wide column">
          <h1>Lasted Post</h1>
      </div>
      <div class="eight wide column">
          <div class="ui fluid icon input">
            <input type="text" v-model="searchString" placeholder="Search a very wide input...">
            <i class="search icon"></i>
          </div>
      </div>
      <div class="three wide column">
          <div class="ui compact menu">
            <a class="item active">
              <i class="list layout icon"></i>
            </a>
            <div class="link item">
              <i class="grid layout icon"></i>
            </div>
          </div>
      </div>
    </div>

    <div class="ui segment divided items">
      <div class="item" v-for="all in filteredArticles">
        <div class="ui small image">
          <img :src="all.img">
        </div>
        <div class="middle aligned content">
          <div class="header">
            {{all.judul}}
          </div>
          <div class="description">
            <p>{{all.content}}</p>
          </div>
          <div class="extra">
            <div class="ui right floated mini button">
              Action
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      searchString: '',
      article: [{
        judul: 'Cabut gigi geratis',
        img: 'https://semantic-ui.com/images/wireframe/image.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tanggal: '25-09-2017',
        author: {
          name: 'Arlina P.',
          picture: 'https://semantic-ui.com/images/wireframe/image.png'
        }
      }, {
        judul: 'Posyandu Mingguan',
        img: 'https://semantic-ui.com/images/wireframe/image.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        tanggal: '25-09-2017',
        author: {
          name: 'Arlina P.',
          picture: 'https://semantic-ui.com/images/wireframe/image.png'
        }
      }, {
        judul: 'Imunisasi Balita',
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
    filteredArticles: function () {
      let articlesArray = this.article
      let searchString = this.searchString

      if (!searchString) {
        return articlesArray
      }
      searchString = searchString.trim().toLowerCase()
      articlesArray = articlesArray.filter(function (item) {
        if (item.judul.toLowerCase().indexOf(searchString) !== -1) {
          return item
        }
      })
        // Return an array with the filtered data.
      return articlesArray
    }
  }
}

</script>

<style lang="css">
</style>
