import { prisma } from "../utils/prisma";
import { clean } from "../utils/helper";

export default async function updateDb() {
  const resource = [
    {
      title: "Audio Streaming",
      links: [
        {
          title: "Cider - Streaming",
          link: ["https://cider.sh/"],
          starred: false,
        },
      ],
      subCategory: [
        {
          title: "Streaming Apps",
          links: [
            {
              title: "Cider - Streaming",
              link: ["https://cider.sh/"],
              starred: false,
            },
            {
              title: "Resso - Streaming",
              link: ["https://www.resso.com/in/"],
              starred: false,
            },
            {
              title: "Musify - Streaming",
              link: ["https://github.com/gokadzev/Musify"],
              starred: false,
            },
            {
              title: "Muffon - Streaming",
              link: ["https://github.com/staniel359/muffon"],
              starred: false,
            },
            {
              title: "Deezer - Streaming",
              link: ["https://www.deezer.com/"],
              starred: false,
            },
            {
              title: "OdesliBot - Audio Stream Search Bot",
              link: ["https://t.me/odesli_bot"],
              starred: false,
            },
            {
              title: "MusicBucket - Track / Share Music / Telegram",
              link: ["https://musicbucket.net/"],
              starred: false,
            },
            {
              title: "JukeboxStar - Collaborative Playlist Streaming",
              link: ["https://jukeboxstar.com/"],
              starred: false,
            },
            {
              title: "UnblockNeteaseMusic - Unlock Unavailable Netease Music",
              link: ["https://github.com/nondanee/UnblockNeteaseMusic"],
              starred: false,
            },
            {
              title:
                "stemplayerplayer, StemPlayer or stem-player-emulator - Kanye West STEM Player Emulators",
              link: [
                "https://github.com/nn9dev/stemplayerplayer",
                "https://stemplayer.io/",
                "https://github.com/krystalgamer/stem-player-emulator",
              ],
              starred: false,
            },
          ],
        },
        {
          title: "Streaming Sites",
          links: [
            {
              title: "Pandora - Browser Music",
              link: ["https://www.pandora.com/"],
              starred: false,
            },
            {
              title: "Jango - Browser Music",
              link: ["https://jango.com/"],
              starred: false,
            },
            {
              title: "musify - Browser Music",
              link: ["https://musify.club/"],
              starred: false,
            },
            {
              title: "Jamendo - Browser Music",
              link: ["https://www.jamendo.com/"],
              starred: false,
            },
            {
              title: "Flowful - Browser Music",
              link: ["https://flowful.app/"],
              starred: false,
            },
            {
              title: "Kainet - Browser Music",
              link: ["https://kainet.rocks/"],
              starred: false,
            },
            {
              title: "Mp3Deer - Browser Music",
              link: ["https://mp3deer.com/"],
              starred: false,
            },
            {
              title: "Last.fm - Browser Music",
              link: ["https://www.last.fm/"],
              starred: false,
            },
            {
              title: "YesPlayMusic - Browser Music",
              link: ["https://music.qier222.com/"],
              starred: false,
            },

            {
              title: "datpiff - Mixtapes",
              link: ["https://www.datpiff.com/"],
              starred: false,
            },
            {
              title: "pumpyouup - Indie Dubstep",
              link: ["http://www.pumpyouup.com/"],
              starred: false,
            },
            {
              title: "musopen - Classical",
              link: ["https://musopen.org/music/"],
              starred: false,
            },
            {
              title: "Bandcamp or Hidden Bandcamp Tracks - Free Bandcamp Music",
              link: [
                "https://bandcamp.com/tag/free-music?tab=all_releases",
                "https://github.com/7x11x13/hidden-bandcamp-tracks",
              ],
              starred: false,
            },
            {
              title: "Audius - User Made Music Platform",
              link: ["https://audius.co/"],
              starred: false,
            },

            {
              title: "The Eternal Jukebox - Never-Ending Versions of Songs",
              link: ["https://eternalbox.dev/"],
              starred: false,
            },
            {
              title: "Battle of the Bits - User-Made Music Competitions",
              link: ["https://battleofthebits.org/"],
              starred: false,
            },
            {
              title: "Openwhyd - Music Sharing Community / Chrome",
              link: [
                "https://openwhyd.org/",
                "https://chrome.google.com/webstore/detail/openwhyd-%E2%9C%9A-track/foohaghobcolamikniehcnnijdjehfjk",
              ],
              starred: false,
            },
            {
              title: "Session or Volume - Live Cam Concerts",
              link: ["https://sessionslive.com/", "https://volume.com/"],
              starred: false,
            },
            {
              title: "Bandcamp New Tab - Random Bandcamp Songs on New Tabs",
              link: [
                "https://chrome.google.com/webstore/detail/bandcamp-new-tab/nbabnnemlofbllcflfjpjgkgmcdbeemc",
              ],
              starred: false,
            },
          ],
        },
        {
          title: "Podcasts / Radio",
          links: [
            {
              title: "Android / iOS - Podcasts & Radio",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android#wiki_.25B7_android_podcasts_.2F_radio",
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android#wiki_.25B7_ios_podcasts_.2F_radio",
              ],
              starred: true,
            },
            {
              title: "Spotify Podcasts - Podcasts / Companion / RSS",
              link: [
                "https://open.spotify.com/browse/podcasts",
                "https://sebschaef.bitbucket.io/podify/",
                "https://github.com/timdorr/spotifeed",
              ],
              starred: true,
            },
            {
              title: "Radio Streaming Sites - Radio Sites",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_radio_streaming_sites",
              ],
              starred: false,
            },
            {
              title: "Podchaser or Listen Notes - Podcast Databases / Trackers",
              link: ["https://podchaser.com/", "https://www.listennotes.com/"],
              starred: false,
            },
            {
              title: "iHeartRadio - Podcasts / Radio",
              link: ["https://www.iheart.com/"],
              starred: false,
            },
            {
              title: "Mixcloud - Podcasts / Radio",
              link: ["https://www.mixcloud.com/"],
              starred: false,
            },
            {
              title: "myTuner - Podcasts / Radio",
              link: ["https://mytuner-radio.com/"],
              starred: false,
            },
            {
              title: "TuneIn - Podcasts / Radio",
              link: ["https://tunein.com/"],
              starred: false,
            },
            {
              title: "Zeno - Podcasts / Radio",
              link: ["https://zeno.fm/"],
              starred: false,
            },
            {
              title: "Kukufm - Podcasts / Radio",
              link: ["https://kukufm.com/"],
              starred: false,
            },
            {
              title: "PodParadise - Podcasts",
              link: ["https://www.podparadise.com/"],
              starred: false,
            },
            {
              title: "Podbean - Podcasts",
              link: ["https://www.podbean.com/"],
              starred: false,
            },
            {
              title: "Podbay - Podcasts",
              link: ["https://podbay.fm/"],
              starred: false,
            },
            {
              title: "Google Podcasts - Podcasts",
              link: ["https://podcasts.google.com/"],
              starred: false,
            },
            {
              title: "podcastindex - Podcasts",
              link: ["https://podcastindex.org/"],
              starred: false,
            },
            {
              title: "DigitalBook - Podcasts",
              link: ["https://www.digitalbook.io/"],
              starred: false,
            },
            {
              title: "player.fm - Podcasts",
              link: ["https://player.fm/"],
              starred: false,
            },
            {
              title: "Relay.fm - Podcasts",
              link: ["https://www.relay.fm/"],
              starred: false,
            },
            {
              title: "BlogTalkRadio - Podcasts",
              link: ["https://www.blogtalkradio.com/popular"],
              starred: false,
            },
            {
              title: "Awesome Podcasts - Podcasts for Software Engineers",
              link: ["https://github.com/rShetty/awesome-podcasts"],
              starred: false,
            },
            {
              title: "CPod - Podcast App",
              link: ["https://github.com/z-------------/CPod"],
              starred: false,
            },
            {
              title: "Odesli - Podcast Search",
              link: ["https://odesli.co/"],
              starred: false,
            },
            {
              title: "Drive & Listen or DrivenListen - Radio Driving Simulator",
              link: [
                "https://driveandlisten.herokuapp.com/",
                "https://drivenlisten.com/",
              ],
              starred: false,
            },
            {
              title: "Archive.org - News / Classic Radio / Podcasts",
              link: [
                "https://archive.org/details/audio?&sort=-downloads&page=1",
              ],
              starred: false,
            },
            {
              title: "Dumb Old Time Radio or Old Time Radio - Classic Radio",
              link: [
                "http://www.dumb.com/oldtimeradio/",
                "https://oldtime.radio/",
              ],
              starred: false,
            },
            {
              title: "Old Time Radio Downloads - Classic Radio Downloads",
              link: ["https://www.oldtimeradiodownloads.com/"],
              starred: false,
            },
            {
              title: "adblock radio - Ad Free Podcasts / Radio Player / GitHub",
              link: [
                "https://www.adblockradio.com/en/",
                "https://github.com/adblockradio/adblockradio",
              ],
              starred: false,
            },
            {
              title: "radiobot - Radio / Telegram",
              link: ["https://t.me/radiobot"],
              starred: false,
            },
            {
              title: "Curseradio or Remixatron - Radio CLI",
              link: [
                "https://github.com/chronitis/curseradio",
                "https://github.com/drensin/Remixatron",
              ],
              starred: false,
            },
            {
              title:
                "Rekt FM - Chill / Space / Dark / Horror Synth / EBSM / EDM Radio",
              link: ["https://rekt.network/"],
              starred: false,
            },
            {
              title: "Nightwave Plaza or vapor.fm - Vaporwave Radio",
              link: ["https://plaza.one/", "https://vapor.fm/"],
              starred: false,
            },
            {
              title: "Retrowave - Synthwave / Retrowave Radio",
              link: ["https://retrowave.ru/"],
              starred: false,
            },
            {
              title: "Nightride.fm - Synthwave / Darksynth Radio",
              link: ["https://nightride.fm/"],
              starred: false,
            },
            {
              title: "Di.fm - Electronic Radio",
              link: ["https://www.di.fm/"],
              starred: false,
            },
            {
              title: "0x40 - Electronic Radio w/ Anime Pictures",
              link: ["https://0x40.mon.im/"],
              starred: false,
            },
            {
              title: "8bit.fm - Chiptune Radio",
              link: ["https://8bit.fm/"],
              starred: false,
            },
            {
              title: "Openings Moe - Anime Theme Radio",
              link: ["https://openings.moe/"],
              starred: false,
            },
            {
              title: "Ongaku - Anime Radio",
              link: ["https://ongaku.js.org/"],
              starred: false,
            },
            {
              title: "Pool Suite - Summer Radio",
              link: ["https://poolsuite.net/"],
              starred: false,
            },
            {
              title: "latestation - Late-Night Radio",
              link: ["http://radio.late.city/"],
              starred: false,
            },
            {
              title: "LISTEN.moe  - K-Pop Radio / Client",
              link: [
                "https://listen.moe/",
                "https://github.com/LISTEN-moe/windows-app",
              ],
              starred: false,
            },
            {
              title: "Fountain of Dreams - Japanese 80's Radio",
              link: ["https://fountainofdreams.net/"],
              starred: false,
            },
            {
              title: "BakaRadio - Anime Radio",
              link: ["https://www.bakaradio.net/app-bakaradio-player/"],
              starred: false,
            },
            {
              title:
                "Rainwave, Squid Radio, RPGGamers Radio, VGMRadio, VGM or Sitting On Clouds Radio - Video Game Music Radio",
              link: [
                "https://rainwave.cc/",
                "https://www.squid-radio.net/",
                "http://www.rpgamers.net/radio/",
                "https://vgmradio.com/",
                "https://vgm.mmosvc.com/",
                "https://www.sittingonclouds.ru/",
              ],
              starred: false,
            },
            {
              title: "Nectarine - Demo Scene Music Radio",
              link: ["https://www.scenestream.net/demovibes/streams/"],
              starred: false,
            },
            {
              title: "Yesterweb Live Radio - Independent Music Radio",
              link: ["https://yesterweb.org/radio"],
              starred: false,
            },
            {
              title: "Radio Garden - Worldwide Radio",
              link: ["https://radio.garden/"],
              starred: false,
            },
            {
              title: "Radiooooo - Radio / Time Machine",
              link: ["https://radiooooo.com/"],
              starred: false,
            },
            {
              title: "420.moe - 420 Radio",
              link: ["https://420.moe/"],
              starred: false,
            },
            {
              title:
                "Listen To The Clouds or LiveATC - Air Traffic Radio Chatter",
              link: ["http://listentothe.cloud/", "https://www.liveatc.net/"],
              starred: false,
            },
            {
              title: "Broadcastify - Live Emergency, Aircraft & Rail Radio",
              link: ["https://www.broadcastify.com/"],
              starred: false,
            },
            {
              title: "OpenMHz - Live Police Radio",
              link: ["https://openmhz.com/"],
              starred: false,
            },
            {
              title: "morsecode.me - Morse Code Radio / Communication",
              link: ["http://morsecode.me/"],
              starred: false,
            },
            {
              title: "Worldwide Radio - Radio Extension",
              link: ["http://forums.mozillazine.org/viewtopic.php?t=3039738"],
              starred: false,
            },
            {
              title: "CaribouLite - Raspberry-Pi Tx/Rx 6GHz SDR",
              link: ["https://github.com/cariboulabs/cariboulite"],
              starred: false,
            },
            {
              title: "SiriusXM - Free SiriusXM Guide / Activator",
              link: [
                "https://redd.it/txqtsx",
                "https://parker-stephens.github.io/siriusxm-activator/",
              ],
              starred: false,
            },
            {
              title: "Audioburst - Podcast Clip Search",
              link: ["https://search.audioburst.com/"],
              starred: false,
            },
            {
              title: "castero - TUI Terminal Podcast Client",
              link: ["https://github.com/xgi/castero"],
              starred: false,
            },
            {
              title: "Grover or GPodder - Podcast Client",
              link: [
                "https://www.microsoft.com/store/productId/9NBLGGH6C4BC",
                "http://gpodder.org/",
              ],
              starred: false,
            },
            {
              title:
                "Spotify Podcast Downloaders - Download Podcasts from Spotify",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_spotify_downloaders",
              ],
              starred: false,
            },
            {
              title: "ListenLater - Turn Articles into Podcasts",
              link: ["https://www.listenlater.fm/"],
              starred: false,
            },
            {
              title: "ListenBox - Turn YouTube Video into Podcasts",
              link: ["https://listenbox.app/"],
              starred: false,
            },
            {
              title: "Anchor - Podcast Creator",
              link: ["https://anchor.fm/"],
              starred: false,
            },
            {
              title: "Spotify Podcasters - Podcaster Dashboard",
              link: ["https://podcasters.spotify.com/"],
              starred: false,
            },
            {
              title: "Spodcast - Spotify Podcast RSS Proxy",
              link: ["https://github.com/Yetangitu/Spodcast"],
              starred: false,
            },
            {
              title: "JRE Missing - Tracks Missing JRE Podcasts",
              link: ["https://www.jremissing.com/"],
              starred: false,
            },
          ],
        },
        {
          title: "Ambient / Relaxation",
          links: [
            {
              title: "Chillhop - Lo-fi Radio",
              link: ["https://chillhop.com/"],
              starred: true,
            },
            {
              title: "lofi.cafe - Lo-Fi Radio",
              link: ["https://www.lofi.cafe/"],
              starred: true,
            },
            {
              title: "Ambient Rain Sites - Ambient Rain",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_ambient_rain_sounds",
              ],
              starred: true,
            },
            {
              title: "LifeAt - Virtual Study / Work Spaces",
              link: ["https://lifeat.io/"],
              starred: true,
            },
            {
              title: "Coding Cat - Nyan Cat's Cousin / Lo-Fi Radio",
              link: ["https://hostrider.com/"],
              starred: true,
            },
            {
              title: "HaloMe.nu - Halo Menu Screens",
              link: ["https://halome.nu/"],
              starred: true,
            },
            {
              title: "Android / iOS - Ambient Mobile Apps",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android#wiki_.25B7_android_relaxation",
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android#wiki_.25B7_ios_relaxation",
              ],
              starred: true,
            },
            {
              title: "Ambicular - Lo-Fi Radio",
              link: ["https://ambicular.com/"],
              starred: false,
            },
            {
              title: "DevTunes FM - Lo-Fi Radio",
              link: ["https://radio.madza.dev/"],
              starred: false,
            },
            {
              title: "Lofi Music - Lo-Fi Radio",
              link: ["https://lofimusic.app/"],
              starred: false,
            },
            {
              title: "Lo-Fi Player - Lo-Fi Radio",
              link: ["https://lofi-players.netlify.app/"],
              starred: false,
            },
            {
              title: "Lofi Club - Lo-Fi Radio",
              link: ["https://loficlub.vercel.app/"],
              starred: false,
            },
            {
              title: "lofi-player, 2 - Create Room / Lo-Fi Player",
              link: [
                "https://magenta.tensorflow.org/lofi-player",
                "https://magenta.github.io/lofi-player/",
              ],
              starred: false,
            },
            {
              title: "Music For Programming or Wisdom Tree - Music for Focus",
              link: [
                "http://musicforprogramming.net/",
                "https://github.com/HACKER097/wisdom-tree/",
              ],
              starred: false,
            },
            {
              title: "Noizio - Ambient",
              link: ["https://noiz.io/"],
              starred: false,
            },
            {
              title: "Calmsound - Ambient",
              link: ["https://www.calmsound.com/"],
              starred: false,
            },
            {
              title: "Moss Garden - Ambient",
              link: ["https://moss.garden/"],
              starred: false,
            },
            {
              title: "CalmyLeon - Ambient",
              link: ["https://calmyleon.com/"],
              starred: false,
            },
            {
              title: "Moodli - Ambient",
              link: ["https://www.moodil.com/"],
              starred: false,
            },
            {
              title: "Moszen - Ambient",
              link: ["https://www.moszen.com/"],
              starred: false,
            },
            {
              title: "Soundscape - Ambient",
              link: ["https://soundescape.io/"],
              starred: false,
            },
            {
              title: "Generative.fm - Ambient",
              link: ["https://generative.fm/"],
              starred: false,
            },
            {
              title: "Soundrown - Ambient",
              link: ["http://soundrown.com/"],
              starred: false,
            },
            {
              title: "Relaxing Sounds - Ambient",
              link: ["https://unifycosmos.com/relaxing-sounds/"],
              starred: false,
            },
            {
              title: "Whispr - Ambient",
              link: ["https://www.whispr.tech/"],
              starred: false,
            },
            {
              title: "Noises Online - Ambient",
              link: ["https://noises.online/"],
              starred: false,
            },
            {
              title: "A Soft Murmur - Ambient",
              link: ["https://asoftmurmur.com/"],
              starred: false,
            },
            {
              title: "Nature Mixer - Ambient",
              link: ["https://naturemixer.com/"],
              starred: false,
            },
            {
              title: "Eart.fm - Ambient",
              link: ["https://earth.fm/"],
              starred: false,
            },
            {
              title: "Zen Sounds - Ambient",
              link: ["https://app.zenflowchart.com/zen-sounds"],
              starred: false,
            },
            {
              title: "EcoSounds - Ambient",
              link: ["http://en.ecosounds.net/"],
              starred: false,
            },
            {
              title: "CanvasCycle - Ambient",
              link: ["http://www.effectgames.com/demos/canvascycle/"],
              starred: false,
            },
            {
              title: "RelaxFrens - Ambient",
              link: ["https://www.relaxfrens.com/"],
              starred: false,
            },
            {
              title: "Sounds of Maine - Ambient Maine Sounds",
              link: ["https://soundsofmaine.life/"],
              starred: false,
            },
            {
              title: "lofi - Ambient / Lo-fi",
              link: ["https://lofi.co/"],
              starred: false,
            },
            {
              title: "Ambient Mixer - Ambient / Lo-fi",
              link: ["https://www.ambient-mixer.com/"],
              starred: false,
            },
            {
              title: "tree.fm - Ambient Forest Sounds",
              link: ["https://www.tree.fm/"],
              starred: false,
            },
            {
              title: "VibeOcean - Ambient Ocean Sounds",
              link: ["https://defonic.com/vibeocean.html"],
              starred: false,
            },
            {
              title: "Calm - Meditation / Sleep Music",
              link: ["https://app.www.calm.com/"],
              starred: false,
            },
            {
              title: "Tide.fm - Meditation / Sleep Sounds",
              link: ["https://tide.fm/"],
              starred: false,
            },
            {
              title: "ChillOuts - Meditation Aid",
              link: ["http://www.chillouts.com/"],
              starred: false,
            },
            {
              title: "August Ambiance - Ambient Summer Sounds / Relaxation",
              link: ["https://augustambience.com/"],
              starred: false,
            },
            {
              title: "VirtCcean - Ambient Ocean Sounds",
              link: ["https://virtocean.com/"],
              starred: false,
            },
            {
              title: "ASMRion, 2 - Ambient Noise Generator",
              link: [
                "https://asmrion.com/",
                "https://defonic.com/vibeasmrion.html",
              ],
              starred: false,
            },
            {
              title: "NoisyLoop - Ambient Urban Sounds",
              link: ["https://noisyloop.com/"],
              starred: false,
            },
            {
              title:
                "Coffitivity or Hipstersound - Ambient Cafe Sounds / Relaxation",
              link: ["https://coffitivity.com/", "https://hipstersound.com/"],
              starred: false,
            },
            {
              title: "Sound Of Colleagues - Ambient Office Sounds",
              link: ["https://soundofcolleagues.com/"],
              starred: false,
            },
            {
              title: "I Miss My Bar - Ambient Bar Sounds",
              link: ["http://imissmybar.com/"],
              starred: false,
            },
            {
              title: "HomeSick - Ambient Home Sounds",
              link: ["https://scoreascore.com/homesick"],
              starred: false,
            },
            {
              title:
                "You are Listening To LA - Ambient City Sounds & Live LAPD Police Radio",
              link: ["http://youarelistening.to/"],
              starred: false,
            },
            {
              title: "myNoise - Background Noises & Interactive Soundscapes",
              link: ["https://mynoise.net/"],
              starred: false,
            },
            {
              title: "Noisli - Background Sounds for Productivity & Focus",
              link: ["https://www.noisli.com/"],
              starred: false,
            },
            {
              title: "Ambient-Mixer - Ambient Media Inspired Sounds",
              link: ["https://movies.ambient-mixer.com/"],
              starred: false,
            },
            {
              title:
                "Listen to Wikipedia - Listen to the sound of Wikipedia's recent changes feed",
              link: ["http://listen.hatnote.com/"],
              starred: false,
            },
            {
              title: "Tabletop Audio - Ambient Audio for Tabletop Games",
              link: ["https://tabletopaudio.com/"],
              starred: false,
            },
          ],
        },
      ],
    },
    {
      title: "Audio Downloading",
      links: [],
      subCategory: [
        {
          title: "Download Apps",
          links: [
            {
              title: "Music Ripping Guide",
              link: ["https://ori5000.github.io/musicripping.html"],
              starred: true,
            },
            {
              title:
                "Slavart - Deezer, Spotify, Apple Music, YouTube, Qobuz, TIDAL & SoundCloud Download Bot / Site, 2 / Telegram",
              link: [
                "https://slavart.divolt.xyz",
                "https://slavart.gamesdrive.net/",
                "https://gamesdrive.net/",
                "https://t.me/+qkrAOiq7k7ozNzRk",
              ],
              starred: true,
            },
            {
              title: "Spotify Downloaders - Download from Spotify",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_spotify_downloaders",
              ],
              starred: true,
            },
            {
              title: "YouTube Downloaders - Download from YouTube",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_youtube_to_mp3",
              ],
              starred: true,
            },
            {
              title: "Soulseek or Nicotine+ - FLAC / MP3 / Stats / Android",
              link: [
                "https://slsknet.org/",
                "https://nicotine-plus.github.io/nicotine-plus/",
                "https://github.com/mrusse/Slsk-Upload-Stats-Tracker",
                "https://play.google.com/store/apps/details?id=com.companyname.andriodapp1",
              ],
              starred: true,
            },
            {
              title:
                "Telegram Audio Download - Telegram Audio Download Channels",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_telegram_audio_download",
              ],
              starred: true,
            },
            {
              title: "/r/xTrill - MP3 / FLAC / Discord Bot / Backup",
              link: [
                "https://reddit.com/r/xTrill",
                "https://discord.gg/xtrill",
                "https://reddit.com/r/xTrillBackup",
              ],
              starred: false,
            },
            {
              title:
                "streamrip - Deezer, TIDAL, Qobuz, YouTube, and SoundCloud Downloader / Colab",
              link: [
                "https://github.com/nathom/streamrip",
                "https://github.com/taskylizard/rip",
              ],
              starred: false,
            },
            {
              title: "Orpheus - Music Ripper",
              link: ["https://github.com/yarrm80s/orpheusdl"],
              starred: false,
            },
            {
              title: "FreyrJS - Spotify, Deezer and Apple Music Downloader",
              link: ["https://github.com/miraclx/freyr-js"],
              starred: false,
            },
            {
              title: "d-fi or DL-Spt - Deezer Downloaders",
              link: [
                "https://notabug.org/sayem314/d-fi",
                "https://notabug.org/dlspt/dl-spt",
              ],
              starred: false,
            },
            {
              title:
                "OFFMP3, Anything2MP3 or conversormp3 - Video to MP3 Converter",
              link: [
                "https://offmp3.com/",
                "https://anything2mp3.cc/",
                "https://conversormp3.com.br/",
              ],
              starred: false,
            },
            {
              title: "SMLoadr - FLAC / MP3 / Desktop GUI",
              link: [
                "https://t.me/SMLoadrNews",
                "https://github.com/thelucifermorningstar/SMLoadr-AUX/releases",
              ],
              starred: false,
            },
            {
              title: "Musify - MP3",
              link: ["https://github.com/gokadzev/Musify"],
              starred: false,
            },
            {
              title: "MP3Jam - MP3",
              link: ["https://www.mp3jam.org/"],
              starred: false,
            },
            {
              title: "RedSea - Tidal Music Downloader",
              link: ["https://github.com/Dniel97/RedSea"],
              starred: false,
            },
            {
              title: "Telegram Deezer Bots - FLAC / MP3",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_telegram_deezer_bots",
              ],
              starred: false,
            },
            {
              title: "Telegram Audio Download Bots",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_telegram_audio_download_bots",
              ],
              starred: false,
            },
            {
              title: "Chimera - Music Download Tool",
              link: ["https://yadi.sk/d/9H37O67t9XKsnA"],
              starred: false,
            },
            {
              title:
                "BandCamp-DL, Free BandCamp Downloader, Download Bandcamp, bcdl or Bandcamp Downloader - Bandcamp Downloader",
              link: [
                "https://github.com/iheanyi/bandcamp-dl",
                "https://github.com/7x11x13/free-bandcamp-downloader",
                "https://downloadmusicschool.com/bandcamp/",
                "https://github.com/daot/bcdl",
                "https://github.com/Otiel/BandcampDownloader",
              ],
              starred: false,
            },
            {
              title: "Soundcloud Downloaders - Soundcloud Download Tools",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_soundcloud_downloaders",
              ],
              starred: false,
            },
            {
              title: "KeepTube - Soundcloud & Bandcamp Downloader",
              link: ["https://jaymoulin.me/me/keeptune/"],
              starred: false,
            },
            {
              title: "GetFVid - Facebook Video / Audio Downloader",
              link: ["https://www.getfvid.com/"],
              starred: false,
            },
            {
              title: "Musescore-downloader - Musescore Downloader",
              link: ["https://github.com/Xmader/musescore-downloader"],
              starred: false,
            },

            {
              title: "fetch-audio-from-fm - Download FM Site Audio",
              link: ["https://github.com/zhenze12345/fetch-audio-from-fm"],
              starred: false,
            },
          ],
        },
        {
          title: "Download Sites",
          links: [
            {
              title:
                "Note - Use redirect bypassers to skip annoying link shorteners.",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage#wiki_skip_redirect",
              ],
              starred: false,
            },
            {
              title: "Audio Download CSE / CSE 2 - Multi-Site Search",
              link: [
                "https://cse.google.com/cse?cx=006516753008110874046:ibmyuhh72io",
                "https://cse.google.com/cse?cx=006516753008110874046:ohobg3wvr_w",
              ],
              starred: true,
            },
            {
              title: 'Download Piracy Guide - ctrl+f and type "audio"',
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/download",
              ],
              starred: true,
            },
            {
              title: "Free MP3 Download - Search / MP3 / FLAC",
              link: ["https://free-mp3-download.net/"],
              starred: true,
            },
            {
              title: "Mudome - MP3 / FLAC",
              link: ["https://mudome.org/"],
              starred: true,
            },
            {
              title:
                "Damon's Game Soundtracks, Squid-Board / 2, Khinsider / Downloader / 2, Duke4 SC-55, Project2612, GameOST, VGMRips or Zophar's - Video Game Soundtracks",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/base64#wiki_damon.27s_game_soundtracks",
                "https://www.squid-board.ru/",
                "https://www.squid-board.org/",
                "https://downloads.khinsider.com/",
                "https://codeberg.org/sun/VGMLoader",
                "https://github.com/obskyr/khinsider",
                "https://sc55.duke4.net/games.php",
                "https://project2612.org/index.php",
                "https://gameost.net/",
                "https://vgmrips.net/packs/",
                "https://www.zophar.net/music",
              ],
              starred: true,
            },
            {
              title: "The Last Disaster, 2 - MP3 / FLAC",
              link: [
                "https://thelastdisaster.vip/",
                "https://thelastdisaster.org/",
              ],
              starred: false,
            },
            {
              title: "SongsLover - MP3",
              link: ["https://songslover.vip/"],
              starred: false,
            },
            {
              title: "VKMusic - MP3 / User: anon / pass: 12345",
              link: ["https://denr01.com/vkm/"],
              starred: false,
            },
            {
              title: "nodata - MP3",
              link: ["https://nodata.tv/"],
              starred: false,
            },
            {
              title: "Black Organization - MP3",
              link: ["https://blackorganizationmp3.wixsite.com/music"],
              starred: false,
            },
            {
              title: "SoundClick - MP3",
              link: ["https://www.soundclick.com/default.cfm"],
              starred: false,
            },
            {
              title: "z1.fm - MP3",
              link: ["https://z1.fm/"],
              starred: false,
            },
            {
              title: "PandaCD - MP3",
              link: ["https://pandacd.io/"],
              starred: false,
            },
            {
              title: "Tancpol - MP3",
              link: ["https://tancpol.net/"],
              starred: false,
            },
            {
              title: "ccMixter or dig ccMixter - DL / Stream / MP3",
              link: ["http://ccmixter.org/", "http://dig.ccmixter.org/dig"],
              starred: false,
            },
            {
              title: "MP3Juices or MP3Juice - DL / Stream / MP3",
              link: ["https://www.mp3juices.cc/", "https://mp3juice.buzz/"],
              starred: false,
            },
            {
              title: "Digital Meltd0wn - MP3",
              link: ["http://digitalmeltd0wn.blogspot.com/"],
              starred: false,
            },
            {
              title: "Music Blogtrotter - MP3",
              link: ["https://musicblogtrotter.blogspot.com/"],
              starred: false,
            },
            {
              title: "New Album Releases - MP3",
              link: ["https://newalbumreleases.net/"],
              starred: false,
            },
            {
              title: "mp3db - MP3",
              link: ["https://mp3db.pro/"],
              starred: false,
            },
            {
              title: "NetNaija - MP3",
              link: ["https://www.thenetnaija.com/"],
              starred: false,
            },
            {
              title: "RockDownload - MP3",
              link: ["https://www.rockdownload.org/"],
              starred: false,
            },
            {
              title: "DeadPulpit - MP3",
              link: ["https://www.deadpulpit.com/"],
              starred: false,
            },
            {
              title: "24NaiJamMuzic - MP3",
              link: ["https://www10.24naijamuzic.com/"],
              starred: false,
            },
            {
              title: "musify - MP3",
              link: ["https://musify.club/"],
              starred: false,
            },
            {
              title: "Funky Souls, 2 - MP3",
              link: [
                "https://forum.funkysouls.org/",
                "https://funkysouls.org/",
              ],
              starred: false,
            },
            {
              title: "Music for the masses ! - MP3",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/base64#wiki_music_for_the_masses_.21",
              ],
              starred: false,
            },
            {
              title: "Cliggo - MP3",
              link: ["https://music.cliggo.com/"],
              starred: false,
            },
            {
              title: "rildi - MP3",
              link: ["https://rilds.com/"],
              starred: false,
            },
            {
              title: "RabbitMP3 - MP3",
              link: ["https://www.rabbitmp3.com/"],
              starred: false,
            },
            {
              title: "Freemp3cloud - MP3",
              link: ["https://freemp3cloud.com/en/"],
              starred: false,
            },
            {
              title: "Mp3Deer - MP3",
              link: ["https://mp3deer.com/"],
              starred: false,
            },
            {
              title: "MartinRadio - MP3",
              link: ["https://www.martinradio.com/"],
              starred: false,
            },
            {
              title: "sixousixmusix - MP3",
              link: ["https://www.sixousixmusix.org/"],
              starred: false,
            },
            {
              title: "Mixupload - MP3",
              link: ["https://mixupload.com/"],
              starred: false,
            },
            {
              title: "Slider - MP3",
              link: ["https://slider.kz/"],
              starred: false,
            },
            {
              title: "My Free MP3 - MP3",
              link: ["https://www.my-free-mp3.cc/"],
              starred: false,
            },
            {
              title: "geedryve - MP3",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/base64#wiki_geedryve",
              ],
              starred: false,
            },
            {
              title: "Rhapsody- MP3",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/base64#wiki_rhapsody",
              ],
              starred: false,
            },
            {
              title: "Tyler - MP3",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/base64#wiki_tyler",
              ],
              starred: false,
            },
            {
              title: "MP3 Clan - MP3",
              link: ["http://mp3clan.mobi/"],
              starred: false,
            },
            {
              title: "24naijamuzic - MP3",
              link: ["https://www11.24naijamuzic.com/album/"],
              starred: false,
            },
            {
              title: "FLAC Attack or Lossless-Music - FLAC",
              link: ["https://flacattack.net/", "https://lossless-music.org/"],
              starred: false,
            },
            {
              title: "Losslessma - FLAC",
              link: ["https://losslessma.net/"],
              starred: false,
            },
            {
              title: "LosslessNews - FLAC",
              link: ["https://flac1.hd24bit.com/"],
              starred: false,
            },
            {
              title: "FLAC World - FLAC",
              link: ["http://flac.world/"],
              starred: false,
            },
            {
              title: "FlacMusic - FLAC",
              link: ["https://www.flacmusic.info/"],
              starred: false,
            },
            {
              title: "Music HiRes - FLAC",
              link: ["https://music-hires.blogspot.com/"],
              starred: false,
            },
            {
              title: "FLAC.xyz - FLAC",
              link: ["http://flac.xyz/"],
              starred: false,
            },
            {
              title: "Sacd - FLAC",
              link: ["https://sacd.xyz/"],
              starred: false,
            },
            {
              title: "Lossless-FLAC - FLAC",
              link: ["https://lossless-flac.com/"],
              starred: false,
            },
            {
              title: "DiscogC - FLAC",
              link: ["https://www.discogc.com/"],
              starred: false,
            },
            {
              title: "LosslessAlbums or HDMusic - FLAC",
              link: ["https://losslessalbums.club/", "https://hdmusic.cc/"],
              starred: false,
            },
            {
              title: "Creamusic - FLAC / Bypass Limit w/ VPN",
              link: ["https://creamusic.net/"],
              starred: false,
            },
            {
              title: "ubdn - MP3 / FLAC",
              link: ["http://ubdn.me/"],
              starred: false,
            },
            {
              title: "IntMusic - MP3 / FLAC",
              link: ["https://intmusic.net/"],
              starred: false,
            },
            {
              title: "Mp3Flac - MP3 / FLAC",
              link: ["https://mp3flac.site/"],
              starred: false,
            },
            {
              title: "Gangster - MP3 / FLAC",
              link: ["https://gangster.su/"],
              starred: false,
            },
            {
              title: "GetRockMusic - MP3 / FLAC",
              link: ["https://getrockmusic.net/"],
              starred: false,
            },
            {
              title: "Core Radio - MP3 / FLAC",
              link: ["https://coreradio.ru/"],
              starred: false,
            },
            {
              title: "AlterPortal - MP3 / FLAC",
              link: ["https://alterportal.net/"],
              starred: false,
            },
            {
              title: "Moe:81 - MP3 / FLAC",
              link: [
                "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/base64#wiki_moe.3A81",
              ],
              starred: false,
            },
            {
              title: "Plastinka - MP3 / FLAC",
              link: ["http://plastinka.org/"],
              starred: false,
            },
            {
              title: "Exystence - MP3 / FLAC",
              link: ["http://exystence.net/"],
              starred: false,
            },
            {
              title: "FindFlac - FLAC / MP3 / MP4",
              link: ["http://findflac.com/"],
              starred: false,
            },
            {
              title: "iPlusFree, 2 - iTunes M4A",
              link: [
                "http://www7.iplusfree.org/",
                "https://www.iplusfree.net/",
              ],
              starred: false,
            },
            {
              title: "iTDMusic - iTunes M4A",
              link: ["https://itdmusic.in/"],
              starred: false,
            },
            {
              title: "iTopMusicx - iTunes M4A",
              link: ["https://itopmusicx.com/"],
              starred: false,
            },
            {
              title: "Plus Premieres - iTunes M4A",
              link: ["http://www128.pluspremieres.biz/"],
              starred: false,
            },
            {
              title: "TvG - MP3 / Rare Music",
              link: ["https://tvg-blog.tumblr.com/"],
              starred: false,
            },
            {
              title: "zippyshare DJs - Zippyshare File Search",
              link: ["https://www.zippysharedjs.com/"],
              starred: false,
            },
            {
              title: "Archive.org - DL / Stream / MP3",
              link: ["https://archive.org/details/audio"],
              starred: false,
            },
            {
              title: "xprm - MP3 / DL / Stream / Requests",
              link: ["https://xprm.net/"],
              starred: false,
            },
            {
              title: "Jimmy R or Musgle - Google Directory Search / MP3",
              link: [
                "http://www.jimmyr.com/mp3_search.php",
                "http://www.musgle.com/",
              ],
              starred: false,
            },
            {
              title: "The Noise-Arch Archive - Underground Cassette Tapes",
              link: ["https://archive.org/details/noise-arch"],
              starred: false,
            },
            {
              title: "Unreleased Disco - MP3 / Unreleased Singles / Subreddit",
              link: [
                "https://unreleased.me/",
                "https://reddit.com/r/UnreleasedDisco",
              ],
              starred: false,
            },
            {
              title: "Take Metal - Metal / MP3",
              link: ["http://takemetal.org/"],
              starred: false,
            },
            {
              title: "GetMetal Club - Metal / MP3 / FLAC",
              link: ["https://getmetal.club/"],
              starred: false,
            },
            {
              title: "Me-4U - Metal / MP3",
              link: ["https://me-4u.com/index.php"],
              starred: false,
            },
            {
              title: "Nuclear Holocaust - Metal / FLAC",
              link: ["https://nuclear-holocaust.blogspot.com/"],
              starred: false,
            },
            {
              title: "Metalminos - Metal / MP3",
              link: ["https://metalminos.net/"],
              starred: false,
            },
            {
              title: "HeavyMetalRarities - Metal / MP3",
              link: ["https://heavymetalrarities.com/"],
              starred: false,
            },
            {
              title: "The Last Disaster - Metal / Hardcore / Rock / MP3 / FLAC",
              link: ["https://thelastdisaster.org/"],
              starred: false,
            },
            {
              title: "Sophie's Floorboard - Hardcore / MP3",
              link: ["https://sophiesfloorboard.blogspot.com/"],
              starred: false,
            },
            {
              title: "1Gabba - Electronic / MP3",
              link: ["https://1gabba.pw/"],
              starred: false,
            },
            {
              title: "Gabber - Electronic / MP3",
              link: ["https://gabber.od.ua/"],
              starred: false,
            },
            {
              title: "EDM Lake - Electronic / MP3",
              link: ["https://edmlake.com/"],
              starred: false,
            },
            {
              title: "EDMBoost - Electronic / MP3",
              link: ["https://edmboost.org/"],
              starred: false,
            },
            {
              title: "EDMWaves - Electronic / MP3",
              link: ["https://edmwaves.org/"],
              starred: false,
            },
            {
              title: "MusicFans - Electronic / MP3",
              link: ["https://musicfans.space/"],
              starred: false,
            },
            {
              title: "PSYFP - Electronic / MP3",
              link: ["https://psyfp.ucoz.ru/"],
              starred: false,
            },
            {
              title: "DMO - Electronic / MP3",
              link: ["https://dance-music.org/"],
              starred: false,
            },
            {
              title: "MyPromoSound - Electronic / MP3",
              link: ["https://mypromosound.com/"],
              starred: false,
            },
            {
              title: "ElectronicFresh - Electronic / MP3",
              link: ["http://electronicfresh.com/"],
              starred: false,
            },
            {
              title: "InEvil - Electronic / MP3",
              link: ["https://www.inevil.com/"],
              starred: false,
            },
            {
              title: "Ektoplazm - Electronic / MP3 / FLAC",
              link: ["https://ektoplazm.com/"],
              starred: false,
            },
            {
              title: "1Trance - Trance / MP3",
              link: ["https://1trance.org/"],
              starred: false,
            },
            {
              title: "1Techno - Techno / MP3",
              link: ["https://1techno.org/"],
              starred: false,
            },
            {
              title: "HardcoreVinylCollection - Hardcore Techno / MP3",
              link: ["https://archive.org/details/HardcoreVinylCollection78GB"],
              starred: false,
            },
            {
              title: "GlobalDJMix - DJ Mixes / MP3",
              link: ["https://globaldjmix.com/"],
              starred: false,
            },

            {
              title: "Tabletop Audio - Ambient Audio for Tabletop Games",
              link: ["https://tabletopaudio.com/"],
              starred: false,
            },
            {
              title:
                "Free Music Archive, Unminus, BenSound, Incompetech, HookSounds, UppBeat, Soundimage, free stock music or Fugue - Royalty Free Music",
              link: [
                "https://www.freemusicarchive.org/",
                "https://www.unminus.com/",
                "https://www.bensound.com/",
                "https://incompetech.com/",
                "https://www.hooksounds.com/",
                "https://uppbeat.io/",
                "https://soundimage.org/",
                "https://www.free-stock-music.com/",
                "https://icons8.com/music",
              ],
              starred: false,
            },
          ],
        },
      ],
    },
  ];

  clean();

  const data = await prisma.linkArray.findMany({});
  console.log(data.length);
  return;

  resource.map(async (ele) => {
    const resourceData = await prisma.resource.create({
      data: {
        title: "Music Piracy",
      },
    });

    let linkData = {};
    if (ele.links.length > 0) {
      linkData = {
        create: ele.links.map((item) => ({
          title: item.title,
          starred: false,
          links: {
            create: item.link.map((inner) => ({
              link: inner,
            })),
          },
        })),
      };
    }

    const category = await prisma.category.create({
      data: {
        resourceId: resourceData.id,
        title: ele.title,
        // @ts-ignore
        link: linkData,
        subCategory: {
          create: ele.subCategory.map((sub) => ({
            title: sub.title,
            link: {
              create: sub.links.map((link) => ({
                title: link.title,
                starred: link.starred,
                links: {
                  create: link.link.map((inner) => ({
                    link: inner,
                  })),
                },
              })),
            },
          })),
        },
      },
    });
  });
}
