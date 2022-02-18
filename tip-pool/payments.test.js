describe("Payments test (with setup and tear-down)", function() {
	beforeEach(function(){
		bill = 100
		tip = 10
		percent = 10
		billAmtInput.value = bill
		tipAmtInput.value = tip
	})

	it("Should add a new payment to allPayments", function(){
		submitPaymentInfo()
		expect(Object.keys(allPayments).length).toEqual(1)
		expect(allPayments['payment' + paymentId].billAmt).toEqual(bill.toString());
		expect(allPayments['payment' + paymentId].tipAmt).toEqual(tip.toString());
	})
	it("Should return an object containing the bill amount, tip amount and tip percentage", function(){
		let obj = createCurPayment()
		expect(obj.billAmt).toEqual(bill.toString())
		expect(obj.tipAmt).toEqual(tip.toString())
		expect(obj.tipPercent).toEqual(percent)
	})

	it("Should update the payment table", function(){
	    submitPaymentInfo();
	    expect(paymentTbody.childElementCount).toEqual(1)
  	})
	it("should update payment summary", function(){
		submitPaymentInfo()
		expect(summaryTds[0].innerHTML).toEqual('$' + bill.toString())
		expect(summaryTds[1].innerHTML).toEqual('$' + tip.toString())
		expect(summaryTds[2].innerHTML).toEqual(percent + '%')
	})
	afterEach(function() {
	    // teardown logic
	    //document.querySelector('#paymentTable tbody tr').remove()
	    paymentId = 0
	    paymentTbody.innerHTML = ''
	    allPayments = {}; 
  	});
});