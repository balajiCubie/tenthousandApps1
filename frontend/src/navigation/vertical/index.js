// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CalculatorIcon from 'mdi-material-ui/Calculator'
import FunctionsIcon from 'mdi-material-ui/Function'
import HospitalIcon from 'mdi-material-ui/Hospital'
import CurrencyInrIcon from 'mdi-material-ui/CurrencyInr'
import MoreIcon from 'mdi-material-ui/MathCompass'
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import ConstructionIcon from '@mui/icons-material/Construction';
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import ForestIcon from '@mui/icons-material/Forest';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TimerIcon from '@mui/icons-material/Timer';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: '3000+ free calculators'
    },
    {
      title: 'All Calculators',
      icon: CalculatorIcon,
      path: '/calculators'
    },
    {
      title: 'Finance Calculators',
      icon: CurrencyInrIcon,
      path: '/finance-calculators'
    },
    {
      title: 'Health Calculators',
      icon: HospitalIcon,
      path: '/health-calculators'
    },
    {
      title: 'Math Calculators',
      icon: FunctionsIcon,
      path: '/math-calculators'
    },
    {
      title: 'biology Calculators',
      icon: BiotechIcon,
      path: '/biology-calculators'
    },
    {
      title: 'chemistry Calculators',
      icon: ScienceIcon,
      path: '/chemistry-calculators'
    },
    {
      title: 'Construction Calculators',
      icon: ConstructionIcon,
      path: '/Construction-converters'
    },
    {
      title: 'Conversion Calculators',
      icon: WifiProtectedSetupIcon,
      path: '/Conversion-Calculators'
    },
    {
      title: 'Ecology Calculators',
      icon: ForestIcon,
      path: '/Ecology-Calculators'
    },
    {
      title: 'Everyday Life Calculators',
      icon: PermIdentityIcon,
      path: '/Everyday-life-Calculators'
    },
    {
      title: 'Food Calculators',
      icon: FastfoodIcon,
      path: '/FoodCalculators'
    },
    {
      title: 'Physics Calculators',
      icon: TimerIcon,
      path: '/PhysicsCalculators'
    },
    {
      title: 'Sports Calculators',
      icon: SportsMartialArtsIcon,
      path: '/Sports-Calculators'
    },
    {
      title: 'Cuvisoft Discover Calculators',
      icon: ChildFriendlyIcon,
      path: '/cuvisoft-discover'
    },
    {
      title: 'Others Calculators',
      icon: MoreIcon,
      path: '/others-calculators'
    },
  ]
}

export default navigation
