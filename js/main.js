(function($){

    data = [
        { 
            isTitle: true,
            //bgUrl: 'img/this/dr_jm_b.jpg',
            // bgUrl: 'img/this/stromae_2014_a.jpg',
            bgUrl: 'img/this/foule_tente.jpg',
            slideClasses: 'swiper-slide bg-cover relative bg-slate-400',
            title: "<img src='img/this/logo_format.png' class='w-36 md:w-60 mx-initial mx-auto md:mx-0 max-w-none -translate-y-4 md:-translate-y-4'>Julien Sprunger entre dans le club des 1000",
            // title: "Les 10 concerts les plus incroyables de l'histoire <br><span class='relative'>de <img src='img/this/logo_paleo_mauve.png' class='w-32 max-w-none absolute top-2 -right-36'></span>",
            chapo: 'Ce samedi face à Berne, le capitaine de Fribourg Gottéron va disputer son 1000e match de National League. Pour l’occasion, Blick a réuni Julien Sprunger et son ami Andrei Bykov. C’est ce dernier qui a mené l’interview de son capitaine entre confidences et éclats de rires.', 
            chapeau: 'chapeau 1',
            overlayBlack: true
        },
        { 
            //bgUrl: 'img/this/paleo_couches.jpg',
            bgUrl: null,
            slideClasses: 'swiper-slide bg-cover relative bg-slate-500',
            overlay: false,
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 p-8',
            interTextAlt: '«Vous m’avez piégé. Je ne m’attendais pas à ça»',
            textAlt: 'Julien Sprunger va disputer son 1000e match de National League ce samedi face à Berne. Durant sa carrière, il a accepté un nombre incalculable de sollicitations. «Je ne saurais pas quelle question je n’ai pas encore répondu», a-t-il rigolé au moment d’arriver en compagnie d’Andrei Bykov à la table. Alors pour l’occasion, c’est probablement celui qui le connaît le mieux qui a accepté de se mettre dans la peau d’un journaliste pour l’occasion. «Vous m’avez piégé. Je ne m’attendais pas à ça», a rigolé Julien Sprunger. Place au dialogue entre les deux hommes entre confidences, souvenirs impérissables et belle amitié.'
        },
        // { 
        //     bgUrl: 'img/this/paleo_foule_large.jpg',
        //     slideClasses: 'swiper-slide bg-cover relative bg-slate-500',
        //     overlay: true,
        //     colClasses: 'w-full md:w-2/3 p-0 md:p-6 mx-auto bg-custom-textbox p-8 rounded-3xl',
        //     textAlt: 'De la star du moment Rosalia, aux vétérans d’Indochine, en passant par les Black Eyed Peas ou Placebo, la pleine de l’Asse verra à nouveau défiler cette semaine ce qui fait sa renommée années après années: un programme éclectique, une sélection food qui l’est tout autant et son lot de réjouissances qui fait vibrer les Romandes et les Romands l’été venu.<br><br>Pour fêter l’arrivée du rendez-vous nyonnais, et avant de vous accompagner pendant cette 46e édition, Blick vous propose un retour en arrière dans l’oeil des deux maestros de la pleine de l’Asse: Daniel Rossellat et Jacques Monnier.'
        // },
        // { 
        //     bgUrl: 'img/this/paleo_duo_nb.jpg',
        //     slideClasses: 'swiper-slide bg-cover relative bg-slate-500',
        //     overlay: true,
        //     colClasses: 'w-full md:w-2/3 p-0 md:p-4 mx-auto',
        //     textAlt: 'A la tête du festival depuis sa création, le big boss et le programmateur de renom nous livrent les 10 meilleurs concerts dont ils se souviennent dans leur Paléo. Du premier terrain de Colovray jusqu’à celui de l’Asse, de l’intimiste «Paléo folk festival» au grand raout capable de réconcilier Vaudois et Genevois, la légende s’est construite en petites anecdotes, tout comme pour des milliers de romands qui se les racontent encore à la pause café des années plus tard.<br><br> Emotions, souvenirs indélébiles, péripéties surréalistes, voici la sélection de deux passionnés de musique qui ont donné naissance au Paléo. (IMAGE DE ROSSELLAT et MONNIER JEUNES)'
        // },
        { 
            bgUrl: 'img/this/bykov_face_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative',
            who: 'Andrei :',
            field2: '«Tu veux commencer par des questions légères ou plus sérieuses?»',
            text: '<b class="ab">- Andrei Bykov:</b> Tu veux commencer par des questions légères ou un peu plus sérieuses?<br><b class="js">- Julien Sprunger:</b> Ah, tu en as des sérieuses aussi? Alors je dirais qu’on va plutôt commencer un peu léger.'
        },
        { 
            bgUrl: 'img/this/ice_gardien_et_triple.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: '«Tu me racontes le plus gros fou rire que tu as pris dans le vestiaire?»',
            text: 'lorem etc'
        },
        { 
            bgUrl: 'img/this/sprunger_face_2.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-right',
            who: 'Julien :',
            field2: '«On va briser un mythe, je crois»',
            text: '(1500 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/bykov_side_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: '«Souhaites-tu ta carrière à un jeune joueur?»',
            text: '(1500 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/sheet.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-right',
            who: 'Andrei :',
            field2: '«La fierté d’avoir joué toute ta carrière à Fribourg passe-t-elle avant le regret de n’avoir jamais joué ailleurs?»',
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/ice_together_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: '«Comme Montandon, tu prends déjà le futur Sprunger sous ton aile? C’est qui?»',
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/ice_together_bench.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            who: 'Julien :',
            field2: '«J’aime ces moments de calme sur le banc à la fin des tiers»',
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/ice_sprunger_young.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-right',
            who: 'Andrei :',
            field2: '«C’est qui le plus fort? Julien à 100 matches ou Julien à 1000 matches?»',
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/sprunger_back_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-right',
            who: 'Andrei :',
            field2: "«Qu'est-ce qui t'inspire encore aujourd’hui, après tout ce temps?»",
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/sprunger_face_3.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-right',
            who: 'Andrei :',
            field2: "«Tu aimerais qu’on écrive un livre sur toi?»",
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/bykov_face_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: "«Si tu n’avais pas été hockeyeur, tu aurais essayé de faire carrière à Arsenal?»",
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/together_lol.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            field2: "«Ce qu’on a vécu ensemble, c’est extraodrinaire»",
            who: 'Julien :',
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/ice_together_2.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: "«Y a-t-il un match ou un moment que tu retiens en particulier?»",
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/ice_down.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: "«Il y a une question que tu n’aurais pas aimé que je te pose?». ",
            text: '(2000 signes de dialogue)'
        },
        { 
            bgUrl: 'img/this/together_gnn.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: "«Et la question que tu aurais aimé que je te pose?». ",
            text: '(2000 signes de dialogue)'
        },
        { 
            isCredits: true,
            overlayColor: true,
            bgUrl: 'img/this/ice_together_bye.jpg',
            bgColor: null,
            slideClasses: 'swiper-slide credits bg-cover relative bg-slate-400',
        }	
	];

    Handlebars.registerHelper('indexFormatter', function(index) {
        return (index < 10 ? '0' : '') + index;
      });

    buildList(data);
      function buildList(data){
          var source   = $("#slide-template").html();
          var template = Handlebars.compile(source);
          var html = template({'slide':data});
          $(".swiper-wrapper").prepend(html); 
      }

    buildContent(data);
    function buildContent(data){
        var source   = $("#content-template").html();
        var template = Handlebars.compile(source);
        var html = template({'content':data});
        $(".content").prepend(html); 
    }

	
	// console.log(data);

    // buildCards(data);
    // function buildCards(data){
    //     var source   = $("#card-template").html();
    //     var template = Handlebars.compile(source);
    //     var html = template({'card':data});
    //     $(".authors").prepend(html); 
    // }
    
    setTimeout(function() { 
        $('body').addClass('is-visible');
    }, 1000);

    setTimeout(function() { 
        $('.scroller').addClass('is-visible');
    }, 6000);
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 400,
        slidesPerView: 1,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.apres',
          prevEl: '.avant',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });
    
    
    var controller = new ScrollMagic.Controller();

    
    

            setTimeout(function() { 

                //alert($("#trigger01").parent().height());
                   
                new ScrollMagic.Scene({triggerElement: "#trigger00", duration: $("#trigger00").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger00').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger01", duration: $("#trigger01").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger01').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger02", duration: $("#trigger02").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger02').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger03", duration: $("#trigger03").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger03').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);
               
                new ScrollMagic.Scene({triggerElement: "#trigger04", duration: $("#trigger04").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger04').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger05", duration: $("#trigger05").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger05').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);
                
                new ScrollMagic.Scene({triggerElement: "#trigger06", duration: $("#trigger06").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger06').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger07", duration: $("#trigger07").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger07').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger08", duration: $("#trigger08").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger08').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger09", duration: $("#trigger09").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger09').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger10", duration: $("#trigger10").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger10').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger11", duration: $("#trigger11").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger11').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger12", duration: $("#trigger12").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger12').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger13", duration: $("#trigger13").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger13').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger14", duration: $("#trigger14").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger14').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger15", duration: $("#trigger15").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger15').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger16", duration: $("#trigger16").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger16').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger17", duration: $("#trigger17").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger17').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

               

                // new ScrollMagic.Scene({triggerElement: "#trigger25", duration: $("#trigger25").parent().height()})
                // .on("enter", function (event) {
                //         var i = parseInt($('#trigger25').attr('id').slice(-2));
                //         swiper.slideTo(i+1);
                //         //$('.scroller').removeClass('is-visible');
                // }).triggerHook(0.8).addIndicators({name: "#trigger25"}).addTo(controller);

                
            }, 2000);
    

    

   
    // new ScrollMagic.Scene({triggerElement: "#trigger3", duration: $("#trigger3").parent().height()})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger3').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addIndicators({name: "trigger slide 3"}).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger4"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger4').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger5"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger5').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger6"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger6').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger7"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger7').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger8"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger8').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger9"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger9').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger10"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger10').attr('id').slice(-2));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);
        
//     Handlebars.registerHelper('indexFormatter', function(index) {
//   let formattedIndex = String(index);
//   if (formattedIndex.length < 2) {
//     formattedIndex = '0' + formattedIndex;
//   }
//   return formattedIndex;
// });


    

})(jQuery);