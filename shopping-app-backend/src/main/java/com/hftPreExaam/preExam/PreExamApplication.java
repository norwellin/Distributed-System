package com.hftPreExaam.preExam;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
public class PreExamApplication {

	
	@GetMapping("/getHello")
	public String sayHello(){

		return "Hallo, Hft! (GET Call)";

	}
	public static void main(String[] args) {
		SpringApplication.run(PreExamApplication.class, args);
	}

}
