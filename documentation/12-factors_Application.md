# 12-Factor App

1. **Codebase**  
   🌟**Explanation:**
   One codebase tracked in revision control, many deploys.
   
   :rocket:**What We Did:**
   We created Docker images for both the front end and back end, so they can be deployed anywhere.


3. **Dependencies**
   🌟**Explanation:**
   Explicitly declare and isolate dependencies.

   :rocket:**What We Did:**

5. **Config**  
   Store config in the environment.

6. **Backing services**  
   Treat backing services as attached resources.

7. **Build, release, run**  
   Strictly separate build and run stages.

8. **Processes**  
   Execute the app as one or more stateless processes.

9. **Port binding**  
   Export services via port binding.

10. **Concurrency**  
   Scale out via the process model.

11. **Disposability**  
   Maximize robustness with fast startup and graceful shutdown.

12. **Dev/prod parity**  
    Keep development, staging, and production as similar as possible.

13. **Logs**  
    Treat logs as event streams.

14. **Admin processes**  
    Run admin/management tasks as one-off processes.

####Reference
[Google]:(https://12factor.net/)
