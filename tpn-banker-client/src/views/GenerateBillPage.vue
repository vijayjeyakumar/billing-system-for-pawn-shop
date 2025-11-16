<template>
  <div class="surface-ground min-h-screen flex justify-content-center align-items-start p-3" style="padding-top: 80px; padding-left:180px; ">
    <Card class="w-full max-w-4xl p-4 shadow-3">
      <template #title>
        <h1 class="text-3xl font-bold text-center">Generate Bill</h1>
      </template>
      
      <template #content>
        <form @submit.prevent="submitBill">
          <div class="flex flex-column gap-4 p-fluid">
            <!-- Row 1 -->
            <div class="field flex align-items-center gap-4">
              <label for="id" class="font-bold text-lg w-6">Bill ID *</label>
              <InputText 
                id="id" 
                v-model="billData.id" 
                class="flex-1 text-lg p-3" 
                placeholder="Enter Bill ID"
              />
            </div>

       
            <!-- Row 2 -->
            <div class="field flex align-items-center gap-4">
              <label for="name" class="font-bold text-lg w-6">Customer Name *</label>
              <InputText 
                id="name" 
                v-model="billData.name" 
                class="flex-1 text-lg p-3" 
                placeholder="Enter Customer Name"
              />
            </div>

            <div class="field flex align-items-center gap-4">
              <label for="phone" class="font-bold text-lg w-6">Phone Number *</label>
              <InputText 
                id="phone" 
                v-model="billData.phone" 
                class="flex-1 text-lg p-3" 
                placeholder="Enter Phone Number"
              />
            </div>

            <!-- Row 3 -->
            <div class="field flex align-items-center gap-4">
              <label for="aadhar" class="font-bold text-lg w-6">Aadhar Number *</label>
              <InputText 
                id="aadhar" 
                v-model="billData.aadhar" 
                class="flex-1 text-lg p-3" 
                placeholder="Enter Aadhar Number"
              />
            </div>

            <div class="field flex align-items-center gap-4">
              <label for="interest" class="font-bold text-lg w-6">Interest Rate *</label>
              <Dropdown 
                id="interest"
                v-model="billData.interest" 
                :options="interestRates" 
                optionLabel="label"
                optionValue="value"
                placeholder="Select Interest Rate"
                class="flex-1 text-lg" 
              />
            </div>

            <!-- Row 4 -->
            <div class="field flex align-items-center gap-4">
              <label for="loanAmount" class="font-bold text-lg w-6">Loan Amount *</label>
              <InputText 
                id="loanAmount" 
                v-model="billData.loanAmount" 
                class="flex-1 text-lg p-3" 
                placeholder="Enter Loan Amount"
              />
            </div>

            <div class="field flex align-items-center gap-4">
              <label for="processedDate" class="font-bold text-lg w-6">Processed Date *</label>
              <Calendar 
                id="processedDate"
                v-model="billData.processedDate" 
                dateFormat="yy-mm-dd"
                showIcon
                class="flex-1"
              />
            </div>

            <!-- Row 5 -->
            <div class="field flex align-items-center gap-4">
              <label for="processedBy" class="font-bold text-lg w-6">Processed By *</label>
              <InputText 
                id="processedBy" 
                v-model="billData.processedBy" 
                class="flex-1 text-lg p-3" 
                placeholder="Enter Processed By"
              />
            </div>

            <div class="field flex align-items-center gap-4">
              <label for="dueDate" class="font-bold text-lg w-6">Due Date *</label>
              <Calendar 
                id="dueDate"
                v-model="billData.dueDate" 
                dateFormat="yy-mm-dd"
                showIcon
                class="flex-1 ml-3"
            appendTo="body"
              />
            </div>

            <div class="field flex align-items-center gap-4">
    <label for="photo" class="font-bold text-lg w-6">Customer Photo</label>
    <input 
      type="file" 
      id="photo"
      accept="image/*"
      @change="handlePhotoUpload"
      class="flex-1 text-lg p-2"
    />
  </div>
          <div class="field flex align-items-center gap-4">
    <label for="photo" class="font-bold text-lg w-6">Jwell Photo</label>
    <input 
      type="file" 
      id="photo"
      accept="image/*"
      @change="handlePhotoUploadOfjwell"
      class="flex-1 text-lg p-2"
    />
  </div>

 
<!-- Submit Button at Bottom -->
<div class="flex justify-content-center mt-4 gap-4">
  <Button 
    label="GENERATE BILL" 
    icon="pi pi-file-pdf" 
    class="p-button-info text-lg w-auto" 
    style="background-color: #6366f1 !important; border-color: #93c5fd !important; margin-right: 2rem;"
    type="button"
    size="large"
    @click="generateBill"
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

          </div>
        </form>
      </template>
    </Card>



  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const photoData = ref('')

const jwellPhotoData = ref('')
const toast = useToast() 

// Bill data model
const billData = ref({
  id: '',
  customerId: '',
  name: '',
  phone: '',
  aadhar: '',
  interest: '',
  loanAmount: '',
  processedDate: '',
  processedBy: '',
  dueDate: '',
  remarks: ''
})

const handlePhotoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      photoData.value = e.target.result // This becomes base64 string
    }
    reader.readAsDataURL(file)
  }
}

const handlePhotoUploadOfjwell = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      jwellPhotoData.value = e.target.result // This becomes base64 string
    }
    reader.readAsDataURL(file)
  }
}



// Interest rate options
const interestRates = ref([
  { label: '12%', value: '12%' },
  { label: '18%', value: '18%' }
])

// Submit bill function
const submitBill = () => {
  // Validate required fields
  const requiredFields = ['id', 'customerId', 'name', 'phone', 'aadhar', 'interest', 'loanAmount', 'processedDate', 'processedBy', 'dueDate']
  const missingFields = requiredFields.filter(field => !billData.value[field])
  
//   if (missingFields.length > 0) {
//     toast.add({
//       severity: 'error',
//       summary: 'Validation Error',
//       detail: 'Please fill all required fields',
//       life: 3000
//     })
//     return
//   }

  // Here you would typically send the data to your backend API
  console.log('Bill Data:', billData.value)
  
  toast.add({
    severity: 'success',
    summary: 'Bill Generated',
    detail: 'Bill has been generated successfully',
    life: 3000
  }) 
  // Reset form after submission (optional)
  // resetForm()
}

// Optional: Reset form function
const resetForm = () => {
  billData.value = {
    id: '',
    
    name: '',
    phone: '',
    aadhar: '',
    interest: '',
    loanAmount: '',
    processedDate: '',
    processedBy: '',
    dueDate: '',
    remarks: ''
  }
}

//for prinitng bill 
const generateBill = () => {
  // Validate required fields
  const requiredFields = ['id', 'customerId', 'name', 'phone', 'aadhar', 'interest', 'loanAmount', 'processedDate', 'processedBy', 'dueDate']
  const missingFields = requiredFields.filter(field => !billData.value[field])
  
//   if (missingFields.length > 0) {
//     toast.add({
//       severity: 'error',
//       summary: 'Validation Error',
//       detail: 'Please fill all required fields',
//       life: 3000
//     })
//     return
//   }

  // Open bill in new tab
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
          <h1 style="font-size: 28px; margin: 0;">TPN BANKERS PRIVATE LIMITED</h1>
          <h2 style="font-size: 20px; margin: 10px 0 0 0;">Bill Receipt</h2>
        </div>

<div class="photo-section" style="display: flex; justify-content: space-between; align-items: center; margin: 20px 0;">
  <div style="text-align: left;">
    ${photoData.value ? `<img src="${photoData.value}" style="max-width: 200px; max-height: 250px;" />` : 'No Photo'}
    <p>Customer Photo</p>
  </div>
  <div style="text-align: right;">
    ${jwellPhotoData.value ? `<img src="${jwellPhotoData.value}" style="max-width: 200px; max-height: 250px;" />` : 'No Photo'}
    <p>Jwell Photo</p>
  </div>
</div>
    

        <div class="grid">
          <div>
            <p><strong>Bill ID:</strong> ${billData.value.id}</p>
            
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
          <p>• Failure to redeem grants TPN BUSINESS right to sell jewelry</p>
          <p>• Jewelry valued at current market rates - valuation final</p> 
        </div>
        
        <div class="signature-section">
          <div>
            <br></br>
            <p>________________</p>
            <p>Authorized Signature</p>
          </div>
          <div style="text-align: right;">
            <p>I hereby declare i have completely read and understood the terms and condition</p>
            <p>________________</p>
            <p>Customer Signature</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const printWindow = window.open('', '_blank')
  printWindow.document.write(billHTML)
  printWindow.document.close()
  printWindow.focus()
}
 
</script>

<style scoped>
.field {
  margin-bottom: 2rem;
  margin-left:60px;
}

:deep(.p-inputtext) {
  margin-left: 60px !important; /* Add this line */
  font-size: 1.1rem !important;
  padding: 0.75rem !important;
  border: 2px solid #e5e7eb !important;
  border-radius: 8px !important;
   
  width: calc(100% - 60px) !important; /* Adjust width to account for margin */
}

:deep(.p-dropdown) {
  margin-left: 60px !important; /* Add this */
  width: calc(100% - 60px) !important; /* Add this */
  font-size: 1.1rem !important;
  border: 2px solid #e5e7eb !important;
  border-radius: 8px !important;
  
}

:deep(.p-calendar) {
  margin-left: 60px !important; /* Add this */
  width: calc(100% - 60px) !important; /* Add this */
}
:deep(.p-inputtext:focus) {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
}
 

:deep(.p-button) {
  font-size: 1.2rem !important;
  padding: 0.75rem 2rem !important;
}

:deep(.p-textarea) {
  font-size: 1.1rem !important;
}

.bill-preview {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

@media print {
  .bill-preview {
    margin: 0;
    padding: 20px;
  }
}

</style>