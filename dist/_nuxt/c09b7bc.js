(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{506:function(e,t,l){"use strict";l.r(t);var r=l(212),n=l(510),o=l(511),c=l(502),m=l(512),d=l(503),f=l(501),h=l(444),v=l(504),y=(l(9),l(63),{name:"IndexPage",data:function(){return{title:"",description:"",authorName:"",image:null}},computed:{gallery:function(){return console.log(this.$store),this.$store.getters["gallery/getGallery"]},isFormValid:{get:function(){return null!==this.image&&"image"===this.image.type},set:function(e){}}},created:function(){this.$store.dispatch("gallery/fetchGallery")},methods:{submitForm:function(){console.log(this.image)}}}),_=l(92),component=Object(_.a)(y,(function(){var e=this,t=e._self._c;return t(f.a,{attrs:{justify:"center",align:"center"}},[t(c.a,{attrs:{cols:"12",sm:"8",md:"6"}},[e.gallery.length?t(n.a,{attrs:{cycle:e.gallery.length>4||null,"hide-delimiters":""}},e._l(e.gallery,(function(e){return t(o.a,{key:e.id,attrs:{src:e.src,cover:""}})})),1):t("p",[e._v("Loading...")])],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"8",md:"6"}},[t(d.a,{model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[t(h.a,{attrs:{label:"Заголовок"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),t(v.a,{attrs:{label:"Короткое описание"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),t(h.a,{attrs:{label:"Имя автора"},model:{value:e.authorName,callback:function(t){e.authorName=t},expression:"authorName"}}),e._v(" "),t(m.a,{attrs:{label:"Изображение"},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}}),e._v(" "),t(r.a,{attrs:{color:"primary",disabled:e.isFormValid},on:{click:e.submitForm}},[e._v("Отправить")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);