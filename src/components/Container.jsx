import '../index.css'
import Collapsible from './Collapsible'
import MatchOdds from './MatchOdds'
import ResultChart from './ResultChart'
import SideModule from './SideModule'

export default function Container(){
    return (
                <div>
                <div className='content'>
                <div className='side-module'>
                <SideModule />
                </div>
                <div className='verticle-module'>
                <ResultChart />
                </div>
                </div>
                </div>
    )
}