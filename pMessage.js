var pMessage = {
  dic: {
    'none': [
      {
        'img': '',
        'txt': '',
        'btn': [],
            },
      ],
    'init': [
      {
        'img': 'img/ladatom.png',
        'txt': 'とととと',
        'btn': [
          { 'txt': '押忍', 'evt': 'init' },
          { 'txt':'xxxx', 'evt': null },
          ],
    },
      {
        'img': null,
        'txt': 'けけけけけ',
        'btn': [
          { 'txt':'お酢','evt': null }
          ],
    }
    ],
  },
  cnt: 0,
  crtkey: '',
  crtdic: '',
  get: function(key) {
    if (key == null)
    {
      this.cnt = 0
      this.crtdic = null
    }
    else if (this.crtkey != key)
    {
      this.cnt = 0
      this.crtdic = this.dic[key][this.cnt]
    }
    else if (this.dic[key].length > this.cnt + 1)
    {
      this.cnt++
      this.crtdic = this.dic[key][this.cnt]
    }
    else
    {
      this.cnt = 0
      this.crtdic = null
    }
    this.crtkey = key
    return this.crtdic
  },
  next: function(btnidx) {
      if ( this.crtdic == null )
      {
        return this.get(null)
      }
      return this.get(this.crtdic.btn[btnidx].evt)
  },
};

export default pMessage;