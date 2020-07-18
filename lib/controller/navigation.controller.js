
module.exports = {
    getMenuList: function(req, res)
    {
      console.log('-----------------1')
        navigation = [
            {
              icon:"home",
              status:"0",
              subMenu:[],
              title:"Home",
              url:"hr/dashboard"
            },
            {
              icon:"people",
              status:"0",
              subMenu:[
                {
                  icon:"list",
                  status:"0",
                  title:"List",
                  url:"hr/employees"
                }, 
                {
                  icon:"fingerprint",
                  status:"0",
                  title:"Attendance",
                  url:"hr/attendance"
                },
                {
                  icon:"directions_bike",
                  status:"0",
                  title:"Leaves",
                  url:"hr/leaves"
                },
                {
                  icon:"account_balance_wallet",
                  status:"0",
                  title:"Expences",
                  url:"hr/expences"
                },
                {
                  icon:"credit_card",
                  status:"0",
                  title:"Salary",
                  url:"hr/salary"
                },
                {
                  icon:"credit_card",
                  status:"0",
                  title:"Advance Payment",
                  url:"hr/advance-payment"
                },
                {
                  icon:"credit_card",
                  status:"0",
                  title:"Advance Return",
                  url:"hr/advance-return"
                },
                {
                  icon:"credit_card",
                  status:"0",
                  title:"Loan Approval",
                  url:"hr/loan-approvals"
                },
                {
                  icon:"credit_card",
                  status:"0",
                  title:"Loan EMIs",
                  url:"hr/loan-emis"
                },
                {
                  icon:"assessment",
                  status:"0",
                  title:"Loan Report",
                  url:"hr/loan-reports"
                },
                {
                  icon:"schedule",
                  status:"0",
                  title:"Working Shifts",
                  url:"hr/work-shifts"
                },
                {
                  icon:"assignment_ind",
                  status:"0",
                  title:"Employee Report",
                  url:"hr/employee-report"
                },
               
              ],
              title:"Employees",
            },
          ];
        // console.log(res);
          res.send(navigation);
    }
};