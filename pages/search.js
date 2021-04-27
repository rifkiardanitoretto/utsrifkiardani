//@ts-nocheck
// import styles from '../styles/Home.module.css'
import Layout from '../component/layout'
import Sidebar from '../component/sidebar'
import Menu from '../data-dummy/menu.json'

export default function Login({props}) {
  return (
    <div>
      <Layout LayoutProps = { props.menu }>
        <div className="row">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
                Search Page 
            </h3>
            <form>
              <div className="form-group">
                <label>Isikan Kata Kunci Disini</label>
                <input type="text" className="form-control"/>
              </div>
            </form>
          </div>
          <Sidebar />
        </div>
      </Layout>
    </div>
  )
}
Login.getInitialProps = () =>{
  return{
    props : {
      menu : Menu
    }
  }
}