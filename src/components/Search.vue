<template>
  <div class="main-content">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <div class="form-left">
      <el-form-item label="Trade Date From">
        <el-date-picker v-model="value1" placeholder="Trade Date From" type="date"></el-date-picker>
      </el-form-item>
      <el-form-item label="Trade Date To">
        <el-date-picker v-model="value1" placeholder="Trade Date To" type="date"></el-date-picker>
      </el-form-item>
      <el-form-item label="Ticket Status">
       <el-select v-model="formInline.region" placeholder="Ticket Status">
        <el-option label="Pending Sales Confirmation" value="shanghai"></el-option>
      </el-select>
      </el-form-item>
      <el-form-item label="Ticket Type">
        <el-select v-model="formInline.region" placeholder="Ticket Type">
          <el-option label="Initial Trade" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Trade Type">
        <el-select v-model="formInline.region" placeholder="Trade Type">
          <el-option label="All" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="OASYS ID:">
        <el-input v-model="formInline.user" placeholder="OASYS ID"></el-input>
      </el-form-item>
      <el-form-item label="Trade Source">
        <el-select v-model="formInline.region" placeholder="All">
          <el-option label="All" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="EQRMS Position ID">
        <el-input v-model="formInline.user" placeholder="EQRMS Position ID"></el-input>
      </el-form-item>
      <el-form-item label="Ticket ID:">
        <el-input v-model="formInline.user" placeholder="Ticket ID"></el-input>
      </el-form-item>

      <el-form-item label="Trader">
        <el-select v-model="formInline.region" placeholder="All">
          <el-option label="All" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Sales Person">
        <el-select v-model="formInline.region" placeholder="All">
          <el-option label="All" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Ticket Originator">
        <el-select v-model="formInline.region" placeholder="All">
          <el-option label="All" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Firm Account">
        <el-input v-model="formInline.user" placeholder="Firm account"></el-input>
      </el-form-item>
      <el-form-item label="Counterparty">
        <el-input v-model="formInline.user" placeholder="Counterparty"></el-input>
      </el-form-item>
      <el-form-item label="Product Classification">
        <el-input v-model="formInline.user" placeholder="Product Classification"></el-input>
      </el-form-item>
        <el-form-item label="MW Trade Status" >
          <el-select v-model="formInline.region" placeholder="" >
            <el-option label="PENDING" value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="MW Counterparty">
          <el-input v-model="formInline.user" ></el-input>
        </el-form-item>
        <el-form-item label="Underlying">
          <el-input v-model="formInline.user" placeholder="Underlying"></el-input>
        </el-form-item>
        <el-form-item label="Maturity Date From">
          <el-date-picker v-model="value1"  type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="Maturity Date To">
          <el-date-picker v-model="value1"  type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="MW Reference">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item label="Ticket Received From">
          <el-date-picker v-model="value1"  type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="Ticket Received To">
          <el-date-picker v-model="value1"  type="date"></el-date-picker>
        </el-form-item>
        <el-form-item label="Package ID">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>
      </div>
      <div class="button-fun">

        <el-button type="success" @click="onSubmit">Search</el-button>
        <el-button type="success" @click="onSubmit">Clear</el-button>

      </div>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%;"
      border
      height="100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="RAG"
        label="RAG"
        width="60"
        fixed>
      </el-table-column>
      <el-table-column
        prop="TicketId"
        label="Ticket Id"
        width="110"
        sortable>
      </el-table-column>
      <el-table-column
        prop="TicketDescription"
        label="Ticket Description"
        width="150"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="TicketType"
        label="Ticket Type"
        width="100"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="TicketStatus"
        label="Ticket Status"
        width="115"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="Product Type"
        label="ProductType"
        width="110"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="Underlier"
        label="Underlier"
        width="85"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="Counterparty"
        label="Counterparty"
        width="115"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="Sales"
        label="Sales"
        width="60"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="Trader"
        label="Trader"
        width="65"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="Trade Date"
        label="Trade Date"
        width="95"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="OASYSId"
        label="OASYS Id"
        width="90"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="ActionRequired"
        label="Action Required"
        width="135"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="EQRMSPositionId"
        label="EQRMS Postion Id"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="EQRMSTicketVersion"
        label="EQRMS Ticket Version"
        width="180"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="ExpectedValue"
        label="Expected Value"
        width="135"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="SettlementDate"
        label="Settlement Date"
        width="150"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="RiskFirmAccount"
        label="Risk Firm Account"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="LegalEntity"
        label="Legal Entity"
        width="135"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="ExpirationDate"
        label="Expiration Date"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="TicketSource"
        label="Ticket Source"
        width="135"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="InUse"
        label="In Use"
        width="110"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="TradeType"
        label="Trade Type"
        width="135"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="SubStatus"
        label="Sub-status"
        width="135"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="CounterpartyName"
        label="Counterparty Name"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="OASYSMessageId"
        label="OASYS Message Id"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="EQRMSTradeId"
        label="EQRMS Trade Id"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="Business"
        label="Business"
        width="120"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="CustomerFacingFirmAccount"
        label="Customer-facing Firm Account"
        width="240"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="SwapswireId"
        label="Swapswire Id"
        width="120"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="Exceptions"
        label="Exceptions"
        width="120"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="AmendentReason"
        label="Amendent Reason"
        width="150"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="TicketAcceptedTime"
        label="Ticket Accepted Time"
        width="170"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="PaymentType"
        label="Payment Type"
        width="130"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="PaymentAmount"
        label="Payment Amount"
        width="150"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="TotalPremium"
        label="Total Premium"
        width="150"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="IsMarkitwireUpstreamTrade"
        label="Is Markitwire Upstream Trade"
        width="220"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="MarkitwireTradeStatus"
        label="Markitwire Trade Status"
        width="200"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="StrategyCode"
        label="Strategy Code"
        width="130"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="MarkitwireCounterparty"
        label="Markitwire Counterparty"
        width="200"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="IsTMSAccount"
        label="Is TMS Account"
        width="150"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="TicketOriginatorName"
        label="Ticket Originator Name"
        width="180"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="IsTicketCancellable"
        label="Is Ticket Cancellable"
        width="200"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="IsBulkOriginated"
        label="Is Bulk Originated"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="SourceSystemMnemonic"
        label="Source System Mnemonic"
        width="200"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="IsInter-RegionalDeal"
        label="Is Inter-Regional Deal"
        width="200"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="MarkitwireWorkflowStatus"
        label="Markitwire Workflow Status"
        width="210"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="ClearingStatus"
        label="Clearing Status"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="ExecutionTimestamp(UTc)"
        label="Execution Timestamp(UTC)"
        width="210"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="ReportingParty"
        label="Reporting Party"
        width="150"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="ReportingObligation"
        label="Reporting Obligation"
        width="170"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="IsCFTCEligible"
        label="Is CFTC Eligible"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="IsEMIREligible"
        label="Is EMIR Eligible"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="PackageId"
        label="Package ID"
        width="120"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="TermsheetPresent"
        label="Termsheet Present"
        width="160"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="STRStatus"
        label="STR Status"
        width="120"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="assignedEntity"
        label="assignedEntity"
        width="130"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="elapsed"
        label="elasped"
        width="80"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="canReassgin"
        label="canReassgin"
        width="110"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="cumulativeAge"
        label="cumulativeAge"
        width="130"
        :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>

</template>

<style scoped>
.main-content{
  background-color:white;
  height:100%;
  padding-top: 10px;
  margin-left: 15px;
}


</style>
<style>
.el-table td, .el-table th{
padding: 0;
}
.button-fun{
text-align: center;
}
.el-button+.el-button{
margin-left: 0;
clear:both;
}
.el-form{
clear:both;
}
.el-button{
height:29px;
line-height:29px;
padding: 0;
width: 120px;
margin-top:20px;

}
.el-form-item__label{
width: 155px;
text-align: left;
}
.el-form--inline .el-form-item__content {
width: 163px;
}

.form-left{
width:85%;
margin-top:5px;
margin-bottom: 5px;
padding-top: 15px;
border: 1px solid #d8dce5;

float: left;
}
.el-form-item{
margin-bottom: 7px;
}

.el-form-item__label{
line-height: 27px;
}
.el-form-item__content{
line-height: 27px;
}
.el-input__inner{
height:27px;
line-height:27px;
}
.el-input__icon{
line-height:27px;
}
.el-date-editor.el-input{
width:168px;
}
</style>
<script>
  export default {
  name: 'Search',
   data() {
      return {
        value1: '',
        formInline: {
          user: '',
          region: ''
        },
        tableData: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
       formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
