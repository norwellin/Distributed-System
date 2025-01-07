package com.hftPreExaam.preExam;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class PreExamApplication {

	
	@GetMapping("/getHello")
	public String sayHello(){

		return "Hallo, Hft! (GET Call)";

	}
	public static void main(String[] args) {
		SpringApplication.run(PreExamApplication.class, args);
	}

}
