import '../index.css'
import imgStar from '../img/star_32px.png'

export default function CardModule(){

    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://sports-live-scores.p.rapidapi.com/football/live",
    //     "method": "GET",
    //     "headers": {
    //         "X-RapidAPI-Key": "e445f1df04msh9c2568eefa9e981p1ff976jsn169985ed8bd8",
    //         "X-RapidAPI-Host": "sports-live-scores.p.rapidapi.com"
    //     }
    // };
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });

    const digitOne = Math.floor(Math.random()*2)
    const digitZero = Math.floor(Math.random()*1)
    const points1  = Math.floor(Math.random(0.5)*10)
    const points2  = Math.floor(Math.random(0.5)*10)
    const points3  = Math.floor(Math.random(0.5)*10)
    const decimal1 = Math.floor(Math.random()*100)
    const decimal2 = Math.floor(Math.random()*100)
    const decimal3 = Math.floor(Math.random()*100)
    const sixty = Math.floor(Math.random()*60)
    const sNo = Math.floor(Math.random()*500)
    const footballCountryName = ['australia','austria','bahamas','belgium','brazil','canada','china','cuba','denmark','egypt','finland','france','germany','india','ireland','israel','italy','japan','mexico','netherlands','new zealand','poland','portugal','puerto rico','romania','russia','serbia','south korea','spain','sweden','swizerland','united kingdom']
    const footballLeagues = ['australian gridiron league','down under bowl','IFAF world championship','EIFAF ruopean championship','bahamas bowl','belgian football league(BFL)','the belgian bowl','flemish american football league(FAFL)','carioca bowl','torneio touchdown tournament','amateur gridiron gootball league','bills toronto series','international bowl','china american football league','bacardi bowl','national ligaaeon','egyptian league of american fooball','vaahtera liiga season','LEFA','german football league(GFL)','EFLI','IAFL','shamrock bowl','israeli football league','italian football league','spaghetti bow','atomic bowl','koshien bowl','rice bowl','ONEFA','Global Kilimangaro Bowl','AFBN divison one','tulip bowl','roots indoor american football','capital bowl','haka bowl','american football wellington','polish american football league','polish bowl','LPFA','arenacaup championship','CNFA','russian american football championship','serbian national league','kimchi bowl','spain american football cup','LNFA','superserien','national a','NFSL','swiss bowl','BAFL','BGFL','capital league','britbowl','national football league','super bow','united football league','ohio league','anthractite league','regional football league','world serices of gooball','AFWL','american indoor football league','arena football league','champions indoor football','continental indoor football league','CPIFL','indoor football league']
    const footballLeagues1 = ['australian gridiron league','down under bowl','IFAF world championship','EIFAF ruopean championship','bahamas bowl','belgian football league(BFL)','the belgian bowl','flemish american football league(FAFL)','carioca bowl','torneio touchdown tournament','amateur gridiron gootball league','bills toronto series','international bowl','china american football league','bacardi bowl','national ligaaeon','egyptian league of american fooball','vaahtera liiga season','LEFA','german football league(GFL)','EFLI','IAFL','shamrock bowl','israeli football league','italian football league','spaghetti bow','atomic bowl','koshien bowl','rice bowl','ONEFA','Global Kilimangaro Bowl','AFBN divison one','tulip bowl','roots indoor american football','capital bowl','haka bowl','american football wellington','polish american football league','polish bowl','LPFA','arenacaup championship','CNFA','russian american football championship','serbian national league','kimchi bowl','spain american football cup','LNFA','superserien','national a','NFSL','swiss bowl','BAFL','BGFL','capital league','britbowl','national football league','super bow','united football league','ohio league','anthractite league','regional football league','world serices of gooball','AFWL','american indoor football league','arena football league','champions indoor football','continental indoor football league','CPIFL','indoor football league']
    const tennisCountryName = ['england','united states','france','austrailia','england','china','france','monaco','europe']
    const tennisTournaments = ['wimbledon','us open','roland garoos','austrailian open','atp world tour','shanghai masters','miami open','paris masters','monte-carlo masters','ATP world tour finals']
    // const scorePoints = Math.floor(Math.random() * (100) + 100) / 10;
    const rFootballCountryList = Math.floor(Math.random() * footballCountryName.length);
    const rFootballLeagueList = Math.floor(Math.random() * footballLeagues.length);
    const rFootballLeagueList1 = Math.floor(Math.random() * footballLeagues1.length)
    return (
        <div className='result-chart-card'>
        <div className='rc-serial-number'><p>{sNo}</p></div>
        <div className='partial-card-first first'>
            <div className='partial-card-up'>
        <i className='starimg'><img src={imgStar} alt="img" /></i>
            <p className='live-label'>LIVE</p>
            <p className=''>{sixty}' | </p>
            {/* <i><img src="../img/star_26px.png" alt="img" /></i> */}
            <p className='city'>{(rFootballCountryList, footballCountryName[rFootballCountryList])}</p>
            <p className='country'></p>
            </div>
            <div className='partial-card-down'>
                <p><span className='highlight'>{digitZero}</span>{(rFootballLeagueList, footballLeagues[rFootballLeagueList])}</p>
                <p><span className='highlight'>{digitOne}</span>{(rFootballLeagueList1, footballLeagues1[rFootballLeagueList1])}</p>
            </div>
        </div>
        <div className='partial-card-second'>
            <p className='point-result'>{points1}.{decimal3}</p>
            <p className='point-result'>{points2}.{decimal2}</p>
            <p className='point-result'>{points3}.{decimal1}</p>
            <p className='dropdown-point-result'></p>
            <p className='point-result'>{points1}.{decimal3}</p>
            <p className='point-result'>{points1}.{decimal2}</p>
            <p className='point-result'>{points3}.{decimal1}</p>
            <p className='point-result'>{points3}.{decimal2}</p>
            <p className='point-result'>{points2}.{decimal3}</p>
            <p className='point-result'>{points2}.{decimal1}</p>
            <p className='point-result'>{points1}.{decimal3}</p>

        </div>
    </div>
    )
}