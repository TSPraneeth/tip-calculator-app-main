var tot_bill, cust_no, cust_tip, total_bill_amt, tip_amt, total_tip_amt;
$(document).ready(function () {

    $("input").on('change', function (e) {
        if (e.target.className == "total_bill common_input") {
            tot_bill = $(this).val();
        }
        else if (e.target.className == "no_ppl_custom common_input") {
            cust_no = $(this).val();
        }
        else {
            $("button").removeClass("active");
            cust_tip = $(this).val();
        }

        if($(".custom_tip").val() != "")
        {
        tip_amt = $(this).val();
        console.log(tip_amt);
        $("button").removeClass("active");
        }

        if ((tot_bill != "undefined") && (cust_no != "undefined") && (tip_amt != "undefined")) {
            total_bill_amt = tot_bill / cust_no;
            total_tip_amt = tip_amt / cust_no;
            console.log(tip_amt,"=tip ",cust_no);
            $(".total_per_amt").html("$" + total_bill_amt.toFixed(2));
            $(".tip_per_amt").html("$" + total_tip_amt.toFixed(2));
        }
        else {
            $(".total_per_amt").html("$0.00");
            $(".tip_per_amt").html("$0.00");
        }
    });

    
        if($("button").hasClass("active"))
        {
        $(".custom_tip").val("10");
        tip_amt = $(".active").val();
        }


    $("button").on('click', function (e) {
        // console.log(e.target.className);
        if ($("button").hasClass("active")) {
            $("button").removeClass("active");
        }
        $(this).addClass("active");
    });

    

    $(".reset_btn").on('click', function () {
        $(".total_per_amt").html("$0.00");
        $(".tip_per_amt").html("$0.00");
        $(".total_bill").val(" ");
        $(".custom_tip").val("").attr("placeholder", "Custom");
        $(".no_ppl_custom").val(" ");
    });
});