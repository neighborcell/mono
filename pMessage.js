var pMessage = {
  dic: {
    'none': [
      {
        'title': '',
        'img': '',
        'text': '',
        'btn': '',
            },
      ],
    'init': [
      {
        'title': 'あああああ',
        'img': 'img/zelda.jpg',
        'text': 'とととと',
        'btn': '押忍',
    },
      {
        'title': 'あああああ',
        'img': null,
        'text': 'けけけけけ',
        'btn': 'お酢',
    }
    ],
  },
  cnt: 0,
  current: '',
  getMessage: function(key) {
    var rtn
    if(key == null)
    {
      this.cnt = 0
      this.current = null
      rtn = null
    }
    else if (this.current != key)
    {
      this.cnt = 0
      this.current = key
      rtn = this.dic[key][this.cnt]
    }
    else if (this.dic[key].length > this.cnt + 1)
    {
      this.cnt++
      rtn = this.dic[key][this.cnt]
    }
    else
    {
      this.cnt = 0
      this.current = null
      rtn = null
    }
    return rtn
  }
};

export default pMessage;