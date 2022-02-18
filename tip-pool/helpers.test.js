describe("Helpers test (with setup and tear-down)", function() {
	beforeEach(function(){
		bill = 100
		tip = 10
		percent = 10
		billAmtInput.value = bill
		tipAmtInput.value = tip

	})
	it('should add sum up billAmt, tipAmt, tipPercent individually',function(){
		submitPaymentInfo()
		expect(sumPaymentTotal('billAmt')).toEqual(bill)
		expect(sumPaymentTotal('tipAmt')).toEqual(tip)
		expect(sumPaymentTotal('tipPercent')).toEqual(percent)
	})	
	it('should return tip percentage',function(){
		expect(calculateTipPercent(bill, tip)).toEqual(10)
	})
	it('appends new td to tr',function(){
		let newTr = document.createElement('tr');
  		newTr.id = 'payment' + paymentId;
  		appendTd(newTr, '$' + bill.toString())
  		appendTd(newTr, '$' + tip.toString())
  		appendTd(newTr, percent.toString() + '%')
  		expect(newTr.childElementCount).toEqual(3)
	})
	afterEach(function() {
	    // teardown logic
	    //document.querySelector('#paymentTable tbody tr').remove()
	    paymentId = 0
	    paymentTbody.innerHTML = ''
	    allPayments = {}; 
  	});
});