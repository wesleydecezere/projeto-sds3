import BarChart from "components/barchart";
import DataTable from "components/datatable";
import DonutChart from "components/donutchart";
import Footer from "components/footer";
import NavBar from "components/navbar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='text-primary py-3'>Dashboard</h1>
        <div className='row px-3'>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>
              Taxa de sucesso das vendas (%)
            </h5>
            <BarChart />
          </div>
          <div className='col-sm-6'>
            <h5 className='text-center text-secondary'>
              Taxa de sucesso das vendas (%)
            </h5>
            <DonutChart />
          </div>
        </div>
        <div className='py-3'>
          <h2 className='text-primary'> Todas as vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  )
}

export default Dashboard;