import Table from 'react-bootstrap/Table';
import { TinyText } from '../atoms/TinyText';
import { HeadingTwo } from '../atoms/HeadingTwo';


export const InformationTable = () => {

    return(
        <div>
        <div className='my-3' style={{textAlign:"center"}}>
             <Table bordered className='p-5'>
     
      <tbody>
        <tr>
          <td><TinyText text="Domains"/></td>
          <td><TinyText text="SSL Security"/></td>
          <td><TinyText text="Websites"/></td>
          <td><TinyText text="WordPress"/></td>
           <td rowSpan={2}>
            <HeadingTwo text=".shop"/>
            <TinyText text="Sale! $0.99*/1st year"/>
            <TinyText text="Attract shoppers. Sell more stuff."/>
            </td>
        </tr>
        <tr>
          <td><TinyText text="Email & Microsoft 365"/></td>
          <td><TinyText text="Website Design Services"/></td>
          <td><TinyText text="Online Store"/></td>
          <td><TinyText text="Web Hosting"/></td>
        </tr>
       
      </tbody>
    </Table>
        </div>
        </div>
    )
}