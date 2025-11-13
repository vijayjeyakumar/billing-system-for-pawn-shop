<template>
  <div class="surface-ground min-h-screen flex justify-content-center align-items-start p-3" style="padding-top: 80px; padding-left:180px; ">
    <Card class="w-full max-w-4xl p-4 shadow-3">
      <template #title>
        <h1 class="text-3xl font-bold text-center">Generate Bill</h1>
      </template>
      
      <template #content>
        <form @submit.prevent="submitBill">
          <!-- Your form fields here -->
          
          <!-- Submit Buttons -->
          <div class="flex justify-content-center mt-4 gap-4">
            <Button 
              label="GENERATE BILL" 
              icon="pi pi-file-pdf" 
              class="p-button-info text-lg w-auto" 
              style="background-color: #6366f1 !important; border-color: #93c5fd !important;"
              @click="generateBill"
              type="button"
              size="large"
            />
            <Button 
              label="SAVE" 
              icon="pi pi-save" 
              class="p-button-info text-lg w-auto" 
              style="background-color: #6366f1 !important; border-color: #93c5fd !important;"
              type="submit"
              size="large"
            />
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

// Your existing billData...

const generateBill = () => {
  // Validate form first
  const requiredFields = ['id', 'customerId', 'name', 'phone', 'aadhar', 'interest', 'loanAmount', 'processedDate', 'processedBy', 'dueDate']
  const missingFields = requiredFields.filter(field => !billData.value[field])
  
  if (missingFields.length > 0) {
    toast.add({
      severity: 'error',
      summary: 'Validation Error',
      detail: 'Please fill all required fields',
      life: 3000
    })
    return
  }
  
  openBillInNewTab()
}

const openBillInNewTab = () => {
  const billHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>TPN BUSINESS - Bill</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          margin: 40px; 
          line-height: 1.6;
        }
        .header { 
          text-align: center; 
          margin-bottom: 30px;
          border-bottom: 2px solid #333;
          padding-bottom: 20px;
        }
        .bill-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .loan-details {
          border: 1px solid #333;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        .signature-section {
          display: flex;
          justify-content: space-between;
          margin-top: 60px;
        }
        .terms {
          margin-top: 30px;
        }
        @media print {
          body { margin: 20px; }
          .header { border-bottom: 2px solid #000; }
        }
      </style>
    </head>
    <body>
      <div class="bill-content">
        <div class="header">
          <h1 style="font-size: 28px; margin: 0;">TPN BUSINESS</h1>
          <h2 style="font-size: 20px; margin: 10px 0 0 0;">Loan Bill Receipt</h2>
        </div>
        
        <div class="grid">
          <div>
            <p><strong>Bill ID:</strong> ${billData.value.id}</p>
            <p><strong>Customer ID:</strong> ${billData.value.customerId}</p>
            <p><strong>Name:</strong> ${billData.value.name}</p>
            <p><strong>Phone:</strong> ${billData.value.phone}</p>
          </div>
          <div>
            <p><strong>Aadhar:</strong> ${billData.value.aadhar}</p>
            <p><strong>Processed Date:</strong> ${billData.value.processedDate}</p>
            <p><strong>Due Date:</strong> ${billData.value.dueDate}</p>
            <p><strong>Processed By:</strong> ${billData.value.processedBy}</p>
          </div>
        </div>
        
        <div class="loan-details">
          <h3 style="font-size: 18px; margin-bottom: 10px;">Loan Details</h3>
          <p><strong>Loan Amount:</strong> ${billData.value.loanAmount}</p>
          <p><strong>Interest Rate:</strong> ${billData.value.interest}</p>
        </div>
        
        <div class="terms">
          <h4 style="font-size: 16px; margin-bottom: 10px;">Terms & Conditions:</h4>
          <p>• Loan must be repaid by due date</p>
          <p>• Interest will be charged as per agreed rate</p>
          <p>• Late payments may incur additional charges</p>
        </div>
        
        <div class="signature-section">
          <div>
            <p>________________</p>
            <p>Customer Signature</p>
          </div>
          <div>
            <p>________________</p>
            <p>Authorized Signature</p>
          </div>
        </div>
      </div>
      
      <script>
        // Auto-print option (uncomment if you want auto-print)
        // window.onload = function() {
        //   window.print();
        // }
      <\/script>
    </body>
    </html>
  `

  const printWindow = window.open('', '_blank')
  printWindow.document.write(billHTML)
  printWindow.document.close()
  
  // Optional: Auto-focus for quick Ctrl+P
  printWindow.focus()
}
</script>