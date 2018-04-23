// This file is auto generated by the protocol-buffers cli tool

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */

// Remember to `npm install --save protocol-buffers-encodings`
var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

exports.Action = {
  "OPEN": 0,
  "OPENREADONLY": 1,
  "READ": 2,
  "WRITE": 3,
  "DEL": 4,
  "STAT": 5,
  "CLOSE": 6,
  "DESTROY": 7
}

var Request = exports.Request = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Error = exports.Error = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Stat = exports.Stat = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var Callback = exports.Callback = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

defineRequest()
defineError()
defineStat()
defineCallback()

function defineRequest () {
  var enc = [
    encodings.enum,
    encodings.string,
    encodings.int32,
    encodings.bytes
  ]

  Request.encodingLength = encodingLength
  Request.encode = encode
  Request.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.action)) throw new Error("action is required")
    var len = enc[0].encodingLength(obj.action)
    length += 1 + len
    if (!defined(obj.name)) throw new Error("name is required")
    var len = enc[1].encodingLength(obj.name)
    length += 1 + len
    if (!defined(obj.id)) throw new Error("id is required")
    var len = enc[2].encodingLength(obj.id)
    length += 1 + len
    if (!defined(obj.size)) throw new Error("size is required")
    var len = enc[2].encodingLength(obj.size)
    length += 1 + len
    if (!defined(obj.offset)) throw new Error("offset is required")
    var len = enc[2].encodingLength(obj.offset)
    length += 1 + len
    if (defined(obj.data)) {
      var len = enc[3].encodingLength(obj.data)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.action)) throw new Error("action is required")
    buf[offset++] = 8
    enc[0].encode(obj.action, buf, offset)
    offset += enc[0].encode.bytes
    if (!defined(obj.name)) throw new Error("name is required")
    buf[offset++] = 18
    enc[1].encode(obj.name, buf, offset)
    offset += enc[1].encode.bytes
    if (!defined(obj.id)) throw new Error("id is required")
    buf[offset++] = 24
    enc[2].encode(obj.id, buf, offset)
    offset += enc[2].encode.bytes
    if (!defined(obj.size)) throw new Error("size is required")
    buf[offset++] = 32
    enc[2].encode(obj.size, buf, offset)
    offset += enc[2].encode.bytes
    if (!defined(obj.offset)) throw new Error("offset is required")
    buf[offset++] = 40
    enc[2].encode(obj.offset, buf, offset)
    offset += enc[2].encode.bytes
    if (defined(obj.data)) {
      buf[offset++] = 50
      enc[3].encode(obj.data, buf, offset)
      offset += enc[3].encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      action: 0,
      name: "",
      id: 0,
      size: 0,
      offset: 0,
      data: null
    }
    var found0 = false
    var found1 = false
    var found2 = false
    var found3 = false
    var found4 = false
    while (true) {
      if (end <= offset) {
        if (!found0 || !found1 || !found2 || !found3 || !found4) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.action = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        case 2:
        obj.name = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        found1 = true
        break
        case 3:
        obj.id = enc[2].decode(buf, offset)
        offset += enc[2].decode.bytes
        found2 = true
        break
        case 4:
        obj.size = enc[2].decode(buf, offset)
        offset += enc[2].decode.bytes
        found3 = true
        break
        case 5:
        obj.offset = enc[2].decode(buf, offset)
        offset += enc[2].decode.bytes
        found4 = true
        break
        case 6:
        obj.data = enc[3].decode(buf, offset)
        offset += enc[3].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineError () {
  var enc = [
    encodings.string
  ]

  Error.encodingLength = encodingLength
  Error.encode = encode
  Error.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.message)) throw new Error("message is required")
    var len = enc[0].encodingLength(obj.message)
    length += 1 + len
    if (!defined(obj.stack)) throw new Error("stack is required")
    var len = enc[0].encodingLength(obj.stack)
    length += 1 + len
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.message)) throw new Error("message is required")
    buf[offset++] = 10
    enc[0].encode(obj.message, buf, offset)
    offset += enc[0].encode.bytes
    if (!defined(obj.stack)) throw new Error("stack is required")
    buf[offset++] = 18
    enc[0].encode(obj.stack, buf, offset)
    offset += enc[0].encode.bytes
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      message: "",
      stack: ""
    }
    var found0 = false
    var found1 = false
    while (true) {
      if (end <= offset) {
        if (!found0 || !found1) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.message = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        case 2:
        obj.stack = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found1 = true
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineStat () {
  var enc = [
    encodings.varint
  ]

  Stat.encodingLength = encodingLength
  Stat.encode = encode
  Stat.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.mode)) throw new Error("mode is required")
    var len = enc[0].encodingLength(obj.mode)
    length += 1 + len
    if (defined(obj.uid)) {
      var len = enc[0].encodingLength(obj.uid)
      length += 1 + len
    }
    if (defined(obj.gid)) {
      var len = enc[0].encodingLength(obj.gid)
      length += 1 + len
    }
    if (defined(obj.size)) {
      var len = enc[0].encodingLength(obj.size)
      length += 1 + len
    }
    if (defined(obj.blocks)) {
      var len = enc[0].encodingLength(obj.blocks)
      length += 1 + len
    }
    if (defined(obj.offset)) {
      var len = enc[0].encodingLength(obj.offset)
      length += 1 + len
    }
    if (defined(obj.byteOffset)) {
      var len = enc[0].encodingLength(obj.byteOffset)
      length += 1 + len
    }
    if (defined(obj.mtime)) {
      var len = enc[0].encodingLength(obj.mtime)
      length += 1 + len
    }
    if (defined(obj.ctime)) {
      var len = enc[0].encodingLength(obj.ctime)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.mode)) throw new Error("mode is required")
    buf[offset++] = 8
    enc[0].encode(obj.mode, buf, offset)
    offset += enc[0].encode.bytes
    if (defined(obj.uid)) {
      buf[offset++] = 16
      enc[0].encode(obj.uid, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.gid)) {
      buf[offset++] = 24
      enc[0].encode(obj.gid, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.size)) {
      buf[offset++] = 32
      enc[0].encode(obj.size, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.blocks)) {
      buf[offset++] = 40
      enc[0].encode(obj.blocks, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.offset)) {
      buf[offset++] = 48
      enc[0].encode(obj.offset, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.byteOffset)) {
      buf[offset++] = 56
      enc[0].encode(obj.byteOffset, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.mtime)) {
      buf[offset++] = 64
      enc[0].encode(obj.mtime, buf, offset)
      offset += enc[0].encode.bytes
    }
    if (defined(obj.ctime)) {
      buf[offset++] = 72
      enc[0].encode(obj.ctime, buf, offset)
      offset += enc[0].encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      mode: 0,
      uid: 0,
      gid: 0,
      size: 0,
      blocks: 0,
      offset: 0,
      byteOffset: 0,
      mtime: 0,
      ctime: 0
    }
    var found0 = false
    while (true) {
      if (end <= offset) {
        if (!found0) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.mode = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        case 2:
        obj.uid = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 3:
        obj.gid = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 4:
        obj.size = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 5:
        obj.blocks = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 6:
        obj.offset = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 7:
        obj.byteOffset = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 8:
        obj.mtime = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        case 9:
        obj.ctime = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineCallback () {
  var enc = [
    encodings.int32,
    encodings.string,
    Error,
    Stat,
    encodings.bytes
  ]

  Callback.encodingLength = encodingLength
  Callback.encode = encode
  Callback.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.id)) throw new Error("id is required")
    var len = enc[0].encodingLength(obj.id)
    length += 1 + len
    if (!defined(obj.name)) throw new Error("name is required")
    var len = enc[1].encodingLength(obj.name)
    length += 1 + len
    if (defined(obj.error)) {
      var len = enc[2].encodingLength(obj.error)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.stat)) {
      var len = enc[3].encodingLength(obj.stat)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    if (defined(obj.data)) {
      var len = enc[4].encodingLength(obj.data)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.id)) throw new Error("id is required")
    buf[offset++] = 8
    enc[0].encode(obj.id, buf, offset)
    offset += enc[0].encode.bytes
    if (!defined(obj.name)) throw new Error("name is required")
    buf[offset++] = 18
    enc[1].encode(obj.name, buf, offset)
    offset += enc[1].encode.bytes
    if (defined(obj.error)) {
      buf[offset++] = 26
      varint.encode(enc[2].encodingLength(obj.error), buf, offset)
      offset += varint.encode.bytes
      enc[2].encode(obj.error, buf, offset)
      offset += enc[2].encode.bytes
    }
    if (defined(obj.stat)) {
      buf[offset++] = 34
      varint.encode(enc[3].encodingLength(obj.stat), buf, offset)
      offset += varint.encode.bytes
      enc[3].encode(obj.stat, buf, offset)
      offset += enc[3].encode.bytes
    }
    if (defined(obj.data)) {
      buf[offset++] = 42
      enc[4].encode(obj.data, buf, offset)
      offset += enc[4].encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      id: 0,
      name: "",
      error: null,
      stat: null,
      data: null
    }
    var found0 = false
    var found1 = false
    while (true) {
      if (end <= offset) {
        if (!found0 || !found1) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.id = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        case 2:
        obj.name = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        found1 = true
        break
        case 3:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.error = enc[2].decode(buf, offset, offset + len)
        offset += enc[2].decode.bytes
        break
        case 4:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.stat = enc[3].decode(buf, offset, offset + len)
        offset += enc[3].decode.bytes
        break
        case 5:
        obj.data = enc[4].decode(buf, offset)
        offset += enc[4].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}