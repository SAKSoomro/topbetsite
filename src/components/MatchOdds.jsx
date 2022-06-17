import '../index.css'
import Header from './Header'
import Showcase from './Showcase'
import Footer from './Footer'
import SideModule from './SideModule'
import CardModule from './CardModue'
import useCollapse from 'react-collapsed'
import Collapsible from './Collapsible'

function Collapsibles() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="collapse-header" {...getToggleProps()}>
        <i class="avatar"></i>Collapse down to see live results
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
                <CardModule />
            </div>
        </div>
    </div>
    );
}


function MatchOddsData(){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return ( <div className='matchoddsmodule'>
        <div className='address-bar'>
        </div>
        <div className='result-chart-header'>LIVE NOW</div>
        <div className='card-header'>
                        <p>1</p>
                        <p>X</p>
                        <p>2</p>
                        <p>Buts</p>
                        <p>More</p>
                        <p>Less</p>
                        <p>Oui</p>
                        <p>Non</p>
                        <p>1X</p>
                        <p>12</p>
                        <p>X2</p>
                    </div>
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
                    <Collapsibles />
</div>
)}



export default function MatchOdds(){
    
    return (
        <div>
        <Header />
        <Showcase />
        <div>
                <div className='content'>
                <div className='side-module'>
                <SideModule />
                </div>
                <div className='verticle-module'>
                <MatchOddsData />
                </div>
                </div>
                </div>
        <Footer />
        </div>
    )
}

