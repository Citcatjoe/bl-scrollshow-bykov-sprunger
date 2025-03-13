(function($){

    data = [
        { 
            isHero: true,
            //bgUrl: 'img/this/dr_jm_b.jpg',
            // bgUrl: 'img/this/stromae_2014_a.jpg',
            bgUrl: 'img/this/foule_tente.jpg',
            slideClasses: 'swiper-slide bg-cover relative bg-slate-400',
            title: "<img src='img/this/logo_format.png' class='w-36 md:w-60 mx-initial mx-auto md:mx-0 max-w-none -translate-y-4 md:-translate-y-4'>L’interview exceptionnelle de&nbsp;Julien Sprunger par&nbsp;Andrei Bykov",
            // title: "Les 10 concerts les plus incroyables de l'histoire <br><span class='relative'>de <img src='img/this/logo_paleo_mauve.png' class='w-32 max-w-none absolute top-2 -right-36'></span>",
            chapo: 'Julien Sprunger est devenu un membre du cercle fermé des joueurs ayant disputé 1000e match de National League. Cette barre fatidique a été franchie début octobre 2023. Pour l’occasion, Blick a réuni Julien Sprunger et son ami Andrei Bykov. C’est ce dernier qui a mené l’interview de son capitaine entre confidences et éclats de rire.', 
            chapeau: 'chapeau 1',
            overlayBlack: true
        },
        { 
            isIntro: true,
            bgUrl: null,
            slideClasses: 'swiper-slide bg-cover relative bg-slate-500',
            overlay: false,
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 p-3',
            interTextAlt: 'Julien Sprunger n’a connu qu’un seul maillot',
            text: 'Julien Sprunger a disputé son 1000e match de National League en octobre 2023 face à Berne. Durant sa carrière, il a accepté un nombre incalculable de sollicitations.',
            text2: '<span class="italic font-black">«Je ne saurais pas dire à quelle question je n’ai pas encore répondu»</span>, a-t-il rigolé au moment d’arriver en compagnie d’Andrei Bykov à la table. Alors pour l’occasion, c’est probablement celui qui le connaît le mieux qui a accepté de se mettre dans la peau d’un journaliste.<span class="italic font-black">«Vous m’avez piégé. Je ne m’attendais pas à ça»</span>, a rigolé Julien Sprunger.',
            text3: 'Place au dialogue intime entre les deux hommes. Au programme: confidences, souvenirs impérissables, belle amitié et éclats de rire.'
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
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative',
            who: 'Andrei :',
            field2: '«Tu veux commencer par des questions légères ou plus sérieuses?»',
            text : [
                '<b class="ab">- Andrei Bykov:</b> Tu veux commencer par des questions légères ou un peu plus sérieuses?',
                '<b class="js">- Julien Sprunger:</b> Ah, tu en as des sérieuses aussi? Alors, je dirais qu’on va plutôt commencer un peu léger.',
                '<b class="ab">- Andrei Bykov:</b> En 1000 matches, il y a une pièce d’équipement que tu as déjà oubliée avant un match?',
                "<b class=\"js\">- Julien Sprunger:</b> Je m’attendais à pire <span class='italic'>(rires)</span>. Mais je n'ai pas de souvenir marquant. Je n’ai jamais oublié mes patins ou mes cannes. Ça, j’en suis sûr. Tu sais, je fais toujours un scan complet de mon matériel avant de partir de ma place si nous jouons à l’extérieur. Je crois que je suis assez consciencieux. Un casque, peut-être une fois. Mais Olivier (ndlr Sugnaux, le chef matériel) en a toujours un de rechange. Je me souviens surtout des coéquipiers. Si tu me poses cette question, c’est que toi, ça t’est arrivé?",
                '<b class="ab">- Andrei Bykov:</b> T’as raison. Les autres, on oublie moins facilement que pour soi-même. Moi non plus. Enfin chez les adultes, ça ne m’était jamais arrivé non plus. En juniors par contre… J’étais arrivé une fois sans cuissette ni plastron.',
                '<b class="js">- Julien Sprunger:</b> Ça, c’est très fort parce que ça veut quand même dire que tu as oublié les trois quarts de ton sac. Tu devais te sentir léger <span class="italic">(rires)</span>. À cette époque, on se connaissait, mais moins bien qu’aujourd’hui. Je me souviens de te voir débarquer avec ta grille. Tu étais tout fin. Aujourd’hui, tu es bien costaud.',
                '<b class="ab">- Andrei Bykov:</b> Ça faisait deux ou trois ans que tu étais avec la première équipe. Dans la vie, tu étais aussi plus avancé que nous et on n’était quasi jamais ensemble. On s’est bien rattrapés par la suite.'
            ]
        },
        { 
            bgUrl: 'img/this/ice_gardien_et_triple.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: '«Tu me racontes le plus gros fou rire que tu as pris dans le vestiaire?»',
            text : [
                '<b class="ab">- Andrei Bykov:</b> On a vécu beaucoup de choses tous les deux. Mais tu arrives à me parler de ton plus gros fou rire?',
                '<b class="js">- Julien Sprunger:</b> J’ose en parler aujourd’hui?',
                '<b class="ab">- Andrei Bykov:</b> Je crois qu’on est là pour ça…',
                '<b class="js">- Julien Sprunger:</b> Ce n’est pas un souvenir précis, mais plutôt une époque. Lors de l’année où nous avions disputé la finale en 2013, nous avions un groupe incroyable dans le vestiaire. Joel Kwiatkowski <span class="italic">(au centre sur la photo)</span> avait instauré une tradition inspirée de «Une Famille en Or». Il se mettait devant tout le monde et présentait deux joueurs qui devaient faire un petit spectacle. C’était peu avant le match, on avait déjà les patins aux pieds.',
                '<b class="ab">- Andrei Bykov:</b> Ça a commencé par des petits sketches rigolos.',
                '<b class="js">- Julien Sprunger:</b> On a vu des scènes à pleurer. Des fois, je me dis que ce n’était presque pas possible de jouer un match professionnel après ça. L’entraîneur était au courant. Cela amenait une telle cohésion et une telle décontraction que cela n’a pas posé de problème… jusqu’à un certain point. On menait 3-0 dans notre quart de finale et Bienne est revenu à 3-3. Après ce match, Hans Kossmann nous a dit que c’était terminé. On s’en est sortis et nous sommes allés jusqu’en finale. Mais avant ça, on en a vécu… On a fait une bataille de boules de neige dans le vestiaire à Davos, on a failli faire venir les pompiers à la Spengler. Il y avait des pétards dans notre sketch et cela a déclenché l’alarme incendie pendant le tournoi. Cela ne s’est jamais su. Je ne dirai pas qui - il se reconnaîtra -, mais un ancien joueur qui est toujours en activité dans le milieu du hockey sur glace a organisé un spectacle de motocross.',
                '<b class="ab">- Andrei Bykov:</b> Ils ont fait un spectacle avec des scooters si bien qu’il y avait des traces de pneu dans le vestiaire. Lorsque le coach est arrivé pour faire son speech, ça sentait l’essence dans tout le vestiaire.',
                '<b class="js">- Julien Sprunger:</b> On a encore certaines vidéos et entre nous, on en reparle encore. C’était assez fou.'
            ]
        },
        { 
            bgUrl: 'img/this/sprunger_face_2.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-right',
            who: 'Julien :',
            field2: '«On va briser un mythe, je&nbsp;crois»',
            text : [
                '<b class="ab">- Andrei Bykov:</b> Tu arrives maintenant à ce cap des 1000 matches. Mais il y a un truc que tu aimes toujours autant, c’est de commencer les matches sur la glace, dans la première ligne. Tu arrives à m’expliquer pourquoi?',
                '<b class="js">- <span class="italic">(il éclate de rire)</span> On va briser un mythe, je crois. Je déteste commencer les matches.',
                '<b class="ab">- Andrei Bykov:</b> J’en connais peu qui n’aiment pas ça à ce point.',
                '<b class="js">- Julien Sprunger:</b> Ça a toujours été comme ça. J’aime sauter sur la glace. Mais disputer le premier engagement, ce n’est pas pour moi. Il y a des joueurs qui prennent le fait d’être sur la glace en premier comme un cadeau du coach. Pas moi.',
                '<b class="ab">- Andrei Bykov:</b> Mais même les tiers hein, ce n’est pas que les matches.',
                '<b class="js">- Julien Sprunger:</b> Ah, les tiers aussi. Quand le coach dit que c’est ma ligne qui va commencer, tout le monde se retourne vers moi et rigole. Ils savent que ça me fait chier <span class="italic">(rires)</span>. Ça devient un petit jeu. Quand ce n’est pas ma ligne, je rigole toujours en faisant croire que je suis jaloux. Mais ça ne marche plus. Tout le monde sait.',
                '<b class="ab">- Andrei Bykov:</b> Avec ça, lorsque j’étais davantage sur ta ligne, surtout durant la période avec Benjamin Plüss, je savais que je ne commencerais jamais le match.',
                '<b class="js">- Julien Sprunger:</b> Jamais, c’est clair. On entrait souvent contre la troisième ligne adverse. Mais pas contre la première ou la deuxième.',
                '<b class="ab">- Andrei Bykov:</b> C’est pour ça qu’on marquait plein de buts et qu’on faisait plein de points <span class="italic">(rires)</span>.',
                "<b class=\"js\">- Julien Sprunger:</b> Les premières lignes étaient souvent celles des étrangers. Aujourd'hui, c’est encore davantage le cas. Mais moi, ça m’arrange bien.",
                '<b class="ab">- Andrei Bykov:</b> Et quand on menait au score, on ne jouait quasi plus',
                '<b class="js">- Julien Sprunger:</b> Bon… Moi c’est comme ça aujourd’hui encore. Ça, au moins, ça n’a pas changé <span class="italic">(il éclate de rire)</span>.'
            ]
        },
        { 
            bgUrl: 'img/this/bykov_side_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: '«Souhaites-tu ta carrière à&nbsp;un jeune joueur?»',
            text : [
                '<b class="ab">- Andrei Bykov:</b> Tout le monde va te demander si tu regrettes de ne pas avoir joué dans un autre club. Tu l’as tellement entendu, ça. Est-ce que tu pourrais souhaiter à un autre joueur de vivre une carrière comme la tienne?',
                '<b class="js">- Julien Sprunger:</b> À 200%. Si un joueur rêve de vivre toute sa carrière dans un seul club, je lui dis de foncer.',
                '<b class="ab">- Andrei Bykov:</b> Donc pour toi ça passe par-dessus les regrets de vouloir voir un autre club et l’envie d’aller ailleurs?',
                '<b class="js">- Julien Sprunger:</b> Ah totalement! Mais c’est facile pour moi de le dire aujourd’hui. Je suis ici, à 37 ans, et j’ai fait toute ma carrière à Fribourg. J’ai dû prendre des décisions parfois difficiles que ce soit sportivement ou sur le plan familial. J’aime ce club, c’est le club de toute ma vie et ma deuxième famille. Tout le monde sait que j’aurais pu partir à Zurich, Berne ou aux États-Unis. À chaque fois, je me suis posé plein de questions. Je n’ai jamais repoussé les offres sans même y réfléchir. Si je peux souhaiter quelque chose à un jeune, c’est d’avoir le même luxe que nous, dans ce sport professionnel très difficile, de choisir de rester. Si tu as envie, tu peux continuer de porter le maillot que tu aimes. Aujourd’hui, même si tu as un nom, tu deviens un numéro. J’ai eu de la chance, durant toute ma carrière, de pouvoir choisir de rester à Fribourg.'
            ]
        },
        { 
            bgUrl: 'img/this/sheet.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-right',
            who: 'Andrei :',
            field2: '«Un seul maillot de toute ta carrière, fierté ou&nbsp;regret?»',
            text : [
                "<b class=\"ab\">- Andrei Bykov:</b> Tu vas arriver à ce chiffre fatidique. J’imagine que tu ne réalises pas. Ça fait quand même quelque chose non? 1000 matches, ce n'est pas rien.",
                "<b class=\"js\">- Julien Sprunger:</b> Je réalise à peine. C’est une étape très importante de faire partie de ce cercle fermé. Il n’y a pas beaucoup de joueurs qui y arrivent. C’est quelque chose d’assez extraordinaire. Mais quand tu vois qui je rejoins, ça met quand même un petit coup de vieux <span class='italic'>(rires)</span>. Les premiers que j’ai vus, c’était Martin Steinegger, Gil Montandon etc. On avait 20 ans de différence avec ces gars. Moi, j'avais 18 ans et ils en avaient presque 40.",
                '<b class="ab">- Andrei Bykov:</b> Mais dans le même temps, tu rejoins un cercle de joueurs qui ont clairement marqué l’histoire du championnat de Suisse. C’est extraordinaire de voir que tu n’as connu qu’un seul maillot. C’est ce qui m’impressionne le plus.',
                '<b class="js">- Julien Sprunger:</b> C’est une fierté de l’avoir fait, oui. Je me rends compte gentiment à force que l’on m’en parle. Mais jusqu’à très récemment, je recommençais une saison après l’autre sans trop réfléchir. Si on n’est pas beaucoup, c’est quand même que ce n’est pas si facile et j’aime ce côté assez gratifiant.'
            ]
        },
        { 
            bgUrl: 'img/this/ice_together_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: '«Comme Montandon, tu&nbsp;prends déjà le futur Sprunger sous ton aile?',
            text : [
                '<b class="ab">- Andrei Bykov:</b> On a toujours parlé des jeunes joueurs comme nos poulains. On le faisait avec Mitch <span class="italic">(ndlr Ngoy, ancien défenseur du club)</span>. On le faisait un peu pour rigoler, mais on aimait bien avoir un jeune sous notre aile. C’est qui, maintenant, pour toi?',
                "<b class=\"js\">- Julien Sprunger:</b> C’est vrai que c’est important, ce rôle. J’ai eu de nombreuses discussions avec Gil <span class='italic'>(ndlr Montandon, légende du club)</span>. À un moment, je ne savais pas si je voulais rester à Fribourg. Il m’avait dit que je devais vivre ma carrière pour moi et pour personne d’autre. Rester à Fribourg s’est fait naturellement. Moi, j’aurais un peu le même discours. Bien sûr qu’entre Sandro (Schmid), Killian (Mottet), Christoph (Bertschy), il y a du monde. Tous ces joueurs qui viennent de ce club et représentent la famille Gottéron et qui perpétuent cette tradition, je les vois. J’espère pour Sandro qu’un jour il parte au Canada, aux États-Unis ou en Suède. S’il a besoin de s’en aller, je serais content qu’il vive quelque chose de bénéfique pour sa carrière. Je ne souhaite à personne de passer 20 ans dans le même club si ce n'est pas son souhait. Bertschy est parti en NHL, à Berne et à Lausanne. Je suis content pour lui. C’est aussi générationnel. Nous sommes sur la fin et Sandro est jeune. Mais entre deux, il y a Killian (Mottet), Benoît (Jecker) Nathan (Marchon), Christoph (Bertschy). J’espère qu’ils vont perpétuer cette tradition des Fribourgeois à Gottéron.",
                "<b class=\"ab\">- Andrei Bykov:</b> Ce que je trouve beau, c’est de voir la manière avec laquelle tu arrives à transmettre aux jeunes. Tu es conscient de l'aura que tu as, mais tu n'en profites pas. Tu sais juste aider les plus jeunes.",
                "<b class=\"js\">- Julien Sprunger:</b> J’adore ce rôle de transmission. J’ai beaucoup reçu durant ma carrière, mais j’ai également souvent cherché le dialogue pour apprendre des choses. Je me mets fréquemment à la place des jeunes. À une époque, c’était moi, ce jeune. Quand un Gil venait me taper sur l’épaule et me disait être fier de moi, cela me marquait. Il suffit de deux mots et cela me tient à cœur cette notion d’héritage. Je me sens privilégié, mais c’est important de ne pas l’oublier et de redonner. J’essaie d’éduquer mes enfants avec certaines valeurs que j’ai reçues de mes parents. Je vois la même chose dans ce club et j’essaie de faire passer certains messages pour préserver cet héritage. À ce stade de ma carrière, c’est le mot le plus important. On a tellement reçu dans ce club qui est une famille, que l'on doit absolument redonner aux suivants."
            ]
        },
        { 
            bgUrl: 'img/this/ice_together_bench.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            who: 'Julien :',
            field2: '«J’aime ces moments de&nbsp;calme sur le banc à&nbsp;la&nbsp;fin des tiers»',
            text : [
                '<b class="ab">- Andrei Bykov:</b> Pourquoi tu as commencé à rester tout seul sur le banc en fin de tiers?',
                '<b class="js">- Julien Sprunger:</b> Il n’y a rien de spécial ni un sujet auquel je réfléchis. C’est un moment de calme où tu relâches la pression. Les lumières sont éteintes et je détache mes patins. Je souffle une seconde et je réfléchis à ce que je pourrais dire au moment d’arriver dans le vestiaire. Il y a des moments où je sais que je vais devoir parler.',
                '<b class="ab">- Andrei Bykov:</b> Pour tout te dire, moi j’ai commencé à rester parce que tu étais sur le banc. Et j’aimais bien cette tranquillité avant de retourner dans le vestiaire et d’être dans le feu de l’action. On pense totalement à autre chose. On voit la rolba, les publicités. C’est comme un bol d’air.',
                '<b class="js">- Julien Sprunger:</b> Des fois, on ne se parle pas du tout.',
                '<b class="ab">- Andrei Bykov:</b> On regarde les gens passer. On se laisse juste un peu respirer. C’est assez précieux de vivre ces instants sans pression.'
            ]
        },
        { 
            bgUrl: 'img/this/ice_sprunger_young.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-right',
            who: 'Andrei :',
            field2: '«C’est qui le plus fort? Julien à 100 matches ou Julien à 1000 matches?»',
            text : [
                '<b class="ab">- Andrei Bykov:</b> Je t’ai vu évoluer, mais il y a une question à laquelle je n’arrive pas à répondre. Est-ce que le Julien jouant son 1000e battrait le Julien avec 100 matches au compteur?',
                '<b class="js">- Julien Sprunger:</b> Il le bat de quelle manière?',
                '<b class="ab">- Andrei Bykov:</b> C’est à toi de le dire. Est-ce qu’il y a des choses que tu fais mieux aujourd’hui qu’à l’époque? Ou l’inverse? Par exemple, en 1 contre 1, qui gagne?',
                "<b class=\"js\">- Julien Sprunger:</b> Le Julien de l’époque bat celui d'aujourd'hui. 100 matches ça fait quoi? 2 saisons… Au début de ma carrière, je ne réfléchissais pas et je faisais tout à l’instinct. Maintenant, j’ai acquis une certaine sagesse, même si des fois, je tente des trucs, car cela fait partie de mon ADN. Mais j’essaie de faire attention de jouer de la bonne manière et de montrer l’exemple. À l’époque, j’avais toujours la tête en bas et j’essayais tout le temps des trucs. Mais le hockey a évolué en 20 ans. Ce que je pouvais me permettre à l’époque ne passerait pas forcément aujourd’hui.",
                "<b class=\"ab\">- Andrei Bykov:</b> Moi, j'aurais préféré que tu dises 1000 matches, je crois.",
                '<b class="js">- Julien Sprunger:</b> Sérieux?',
                '<b class="ab">- Andrei Bykov:</b> À 100 matches, tu n’aurais même pas commencé ta feinte que tout le monde savait ce que tu allais faire.',
                '<b class="js">- Julien Sprunger:</b> Aujourd’hui aussi. Mais parfois ça passe encore <span class="italic">(rires)</span>.',
                '<b class="ab">- Andrei Bykov:</b> Je ne suis pas aussi catégorique que toi. Pour moi 60/40 en faveur du Julien d’aujourd’hui. J’aurais dû mettre Julien à 10 matches <span class="italic">(rires)</span>.'
            ]
        },
        { 
            bgUrl: 'img/this/sprunger_back_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-right',
            who: 'Andrei :',
            field2: "«Qu'est-ce qui t'inspire encore aujourd’hui, après tout ce temps?»",
            text : [
                '<b class="ab">- Andrei Bykov:</b> Durant ta carrière, il y a des personnalités qui t’ont inspiré? Et aujourd’hui, qu’est-ce qui te permet de garder cette flamme? Ou est-ce que tu es <span class="italic">drivé</span> naturellement?',
                '<b class="js">- Julien Sprunger:</b> Je ne me suis jamais vraiment posé la question en ces termes. Je n’ai pas de mentor précis. Pour moi, le sport en général est un exemple. C’est un peu bateau, mais je suivais un Roger Federer de loin. Sa manière d’agir, ses discours, ses interviews, j’adorais de voir à quel point il était simple, respectueux. Par contre, je n’ai pas la biographie de quelqu’un sur ma table de nuit. J’ai lu des livres sur Kobe Bryant ou des chanteurs. Mais à aucun moment, je me suis développé en imitant ou en m’inspirant de quelqu’un. Je me suis beaucoup écouté. Les besoins que j’ai aujourd’hui ne sont pas les mêmes que ceux que j’avais à 18 ans.',
                '<b class="ab">- Andrei Bykov:</b> Si ce ne sont pas des personnalités, cela vient d’ailleurs?',
                '<b class="js">- Julien Sprunger:</b> Je pense qu’une grande partie vient de mon éducation qui était très simple, mais avec des valeurs qui sont encore les miennes aujourd’hui. Je m’inspire de joueurs que j’ai côtoyés. Quand tu joues avec un Montandon qui a tout gagné dans sa carrière, tu as envie de suivre ses traces. J’ai pris des exemples au fur et à mesure que j’avançais et je pense que cela a créé qui je suis aujourd’hui.',
                '<b class="ab">- Andrei Bykov:</b> C’est plus un ressenti, si je comprends bien.',
                '<b class="js">- Julien Sprunger:</b> Des émotions, oui. Quand je regardais Federer jouer, j’avais les frissons. Quand il gagnait Wimbledon, j’avais les larmes aux yeux. Je suis assez porté par ça.'
            ]
        },
        { 
            bgUrl: 'img/this/sprunger_face_3.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-right',
            who: 'Andrei :',
            field2: "«Tu aimerais qu’on écrive un livre sur toi?»",
            text : [
                '<b class="ab">- Andrei Bykov:</b> Vingt années de carrière, ça doit te laisser pas mal de souvenirs. Tu aimerais qu’ils soient écrits dans un livre?',
                "<b class=\"js\">- Julien Sprunger:</b> On me l'a déjà proposé. D’un côté, oui parce que tu as l’impression d’avoir tellement de choses à raconter. Tellement de choses intéressantes à laisser aux suivants. J’aime regarder des documentaires sur les sportifs ou lire un livre sur Kobe Bryant. Je trouve génial de pouvoir s’imprégner de la mentalité de ces joueurs. C’est un monde finalement assez fermé. On sait ce qui se déroule devant les caméras, mais lorsqu’elles sont éteintes, il se passe tant de choses.",
                '<b class="ab">- Andrei Bykov:</b> Tu penses que tu aurais le droit de le faire?',
                '<b class="js">- Julien Sprunger:</b> Dès que tu as fini, tu as fini. Après cela dépend. Il y a une part de privé que j’aime préserver. Dire «moi j’ai fait ça», «on était là», «moi je, moi je», j’avoue que j’ai un peu de la peine.',
                '<b class="ab">- Andrei Bykov:</b> Il faudrait que ce soit bien tourné. Mais il ne faut pas non plus te gêner de ce que tu as accompli durant ta carrière.',
                '<b class="js">- Julien Sprunger:</b> Se mettre à nu, ce n’est pas facile. C’est finalement la même question que de savoir si je veux être entraîneur plus tard. J’ai toujours dit que je ne le serai jamais. Mais aujourd’hui, je me rends compte qu’en plus de 20 ans, j’ai appris tellement de choses. Je trouverais dommage de ne rien donner en retour. Je ne me vois pas derrière un banc durant 52 matches. Je n’y pense pas encore aujourd’hui, mais ça me donne envie de trouver un moyen de transmettre un héritage.'
            ]
        },
        { 
            bgUrl: 'img/this/bykov_face_1.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: "«Si tu n’avais pas été hockeyeur, tu aurais essayé de faire carrière à&nbsp;Arsenal?»",
            text : [
                '<b class="js">- Julien Sprunger:</b> «Jeune, il y avait le foot et le hockey dans ma vie jusqu’au jour où j’ai dû faire un choix et ai pris le hockey. Mais le sport est toute ma vie. Devenir pro, c’est un peu le rêve de tout gamin. Ça me fait rire aujourd’hui d’avoir deux enfants qui rêvent d’être footballeurs. Il n’y en a pas un qui veut être hockeyeur. Je trouve cela génial, car cela montre l’importance des valeurs du sport. Mais aujourd’hui, j’ai le discours d’un parent. Je dois leur dire qu’il n’y a pas que le sport dans la vie alors que je ne fais que du sport dans la vie <span class="italic">(rires)</span>. C’est un peu spécial. En tant que gamin, j’aurais aimé jouer au foot. Ayant une femme prof, les enfants ont les deux discours. Mais je ne pousse pas du tout. Tu sais comment je suis. Je ne pousse pas pour qu’ils soient sportifs.<br><br>J’ai réussi à mettre une grosse carapace autour de ma vie privée durant toute ma carrière. Mais mon petit qui a 5 ans est venu au match et a vu sur le programme de match qu’il y avait ma photo. Il m’a demandé de la lui signer. Je l’ai fait comme à n’importe quel autre enfant et il était tout content. Ils ne s’identifient pas avec moi comme à un hockeyeur. Ils me voient à la télé et constatent comment les gens se comportent avec moi, mais au-delà de ça ils voient un papa normal.'
            ]
        },
        { 
            bgUrl: 'img/this/together_lol.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            field2: "«Ce qu’on a vécu ensemble, c’est extraordinaire»",
            who: 'Julien :',
            text : [
                "<b class=\"ab\">- Andrei Bykov:</b> Cette relation entre toi et moi a beaucoup évolué. On a grandi puisqu’on se connaît depuis avant nos 18 ans. Nous sommes passés par plein d’étapes de vie. Nous sommes devenus des hommes. Lorsque je suis devenu père, cela a pris une autre envergure. Cela nous a encore soudés davantage. Au début, on était potes et on déconnait. C’était trop cool. Puis, on a compris que c’était un peu plus que cela. On a toujours été très proches même si on est passablement différents. On a vécu des jeunesses différentes. On a été éduqués différemment. Et là, j'ai l’impression qu’on se rapproche de plus en plus. Et je trouve cela merveilleux tout ce qu’on a vécu.",
                '<b class="js">- Julien Sprunger:</b> Il faut dire que la connexion a aussi commencé au moment où ils nous ont mis sur la même ligne. Cela a fonctionné immédiatement. Sur la glace, on se trouvait les yeux fermés. Quand tu marques, tu te sautes dans les bras. On parlait la même langue. Avec certains joueurs, tu peux être dans le même vestiaire, mais au final le lien ne se crée pas. Comme avec des collègues. Toi et moi, je trouve qu’on a rapidement été sur la même longueur d’onde. Il faut se rendre compte que notre métier est différent de Mr et Mme tout le monde.'
            ]
        },
        { 
            bgUrl: 'img/this/ice_together_2.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: "«Y a-t-il un match ou un moment que tu retiens en&nbsp;particulier?»",
            text : [
                '<b class="ab">- Andrei Bykov:</b> En 20 ans de carrière, il y a un match ou un moment que tu retiens davantage que les autres?',
                '<b class="js">- Julien Sprunger:</b> Il y a surtout des instants qui laissent plus de traces que les autres. 90% des Fribourgeois se souviendront du moment où nous avons battu Zurich en quart de finale. C’était le Champion d’Europe et nous nous étions qualifiés. Pour moi, ce match est unique, car j’avais marqué trois goals dans un match gagné 3-2. Je m’y vois encore. Lorsque je regarde des images de cette époque, je me reconnais à peine. Il y a des moments plus durs. Aller chercher la médaille d’argent à Berne, cela marque. Il y a eu des fiertés personnelles. La cérémonie des JO à Vancouver en 2010 en est une. C’était quelque chose d’incroyable de me dire que je suis arrivé à cet endroit en tant que sportif.',
                '<b class="ab">- Andrei Bykov:</b> Surtout que cela arrive finalement peu de temps après ton accident en 2009 lors du Mondial en Suisse. Cette résilience que tu as eue tout au long de ta carrière m’inspire énormément. Tu n’as jamais rien lâché. Et quand tu dis ne pas vouloir être poussé vers la sortie, je suis admiratif de la manière dont tu es toujours prêt.',
                '<b class="js">- Julien Sprunger:</b> Pour moi, c’est plus difficile à voir, car cela me paraît finalement assez naturel. Mais c’est beau de l’entendre et cela me fait plaisir. Mais je ne me suis jamais dit que j’étais arrivé quelque part. C’est typiquement quelque chose qui doit faire partie de ma personnalité.'
            ]
        },
        { 
            bgUrl: 'img/this/ice_down.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: "«Il y a une question à&nbsp;laquelle tu n’aurais pas&nbsp;aimé répondre?»",
            text : [
                '<b class="ab">- Andrei Bykov:</b> Au moment de préparer cette interview, je suis parti avec un angle: quelles questions j’aurais voulu que l’on me pose. Mais ce n’était pas si simple. Et toi, quelle question avais-tu peur que je te pose?',
                '<b class="js">- Julien Sprunger:</b> Hmmmm. Je suis content que tu ne sois pas allé sur des trucs du style «Quel entraîneur tu as le moins aimé?» ou «Quel joueur t’a laissé le moins bon souvenir?»',
                '<b class="ab">- Andrei Bykov:</b> J’avais noté «Quel entraîneur aurais-tu aimé avoir?»',
                '<b class="js">- Julien Sprunger:</b> Dans ce sens, je n’aurais pas eu de souci. Mais je sais aussi que ce n’est pas ton style de faire ça.',
                '<b class="ab">- Andrei Bykov:</b> Non, je n’y ai même pas pensé.',
                '<b class="js">- Julien Sprunger:</b> Et tu sais que ce n’est pas mon style de pointer du doigt. Surtout que tout le monde m’a apporté quelque chose. Je suis content que tu ne m’aies pas parlé de mes blessures aussi. Je n’ai pas de problème d’en parler. Mais ça ressort souvent dans les interviews. J’ai été MVP durant une saison et personne ne m’en parle alors que tout le monde revient sur mes commotions.',
                "<b class=\"ab\">- Andrei Bykov:</b> Surtout que statistiquement, je n'ai pas l’impression que tu aies été plus blessé que la moyenne.",
                '<b class="js">- Julien Sprunger:</b> Justement. Et je l’ai dit au journaliste lors de cette interview. Je n’aime pas trop rentrer dans ce débat et je suis donc content que l’on ne soit pas rentré là-dedans et que l’on soit sorti de ce cadre.'
            ]
        },
        { 
            bgUrl: 'img/this/together_gnn.jpg',
            color: '#6aaf7f',
            colClasses: 'w-full md:w-1/2 p-0 px-3 md:px-6 pt-10 pb-3 border-l-custom relative float-left',
            who: 'Andrei :',
            field2: "«Et la question que tu&nbsp;aurais aimée?»",
            text : [
                '<b class="ab">- Andrei Bykov:</b> Alors, on termine avec la dernière. Quelle question aurais-tu aimé que je te pose?',
                '<b class="js">- Julien Sprunger:</b> Quel a été ton joueur préféré durant ces 20 années?',
                '<b class="ab">- Andrei Bykov:</b> Et la réponse?',
                '<b class="js">- Julien Sprunger:</b> Ben c’est clair que c’est toi. Tu as marqué ma carrière. Il n’y a pas beaucoup de monde avec qui j’aurai partagé tout ce chemin. Sur les 1000, je ne sais pas combien on en a joués ensemble, mais pas loin de 700 je pense.'
            ]
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